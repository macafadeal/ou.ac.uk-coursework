// Simple server providing static files and an API
const express = require('express');
const multer = require('multer');

const app = express();
const port = 8080;

// Define the notices as a global list so that we can modify it.
const notices = [
    {
        "id": 1,
        "text": "TMA02 tutorial video available now.",
        "category": "normal",
    },
    {
        "id": 2,
        "text": "TMA02 due in 15 days",
        "category": "upcoming",
    },
    {
        "id": 3,
        "text": "Erratum issued for week 14",
        "category": "information",
    },
];

// Mount the static frontend files.
app.use(express.static('app'));

// Handle GET requests to /api/notices and return the current content of the notices constant.
app.get("/api/notices", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(notices));
    res.end();
});

// Handle POST requests to /api/notices/seen/:id and remove the notice with the matching id value.
app.post("/api/notices/seen/:id", (req, res) => {
    let foundIdx = -1;
    for (let idx = 0; idx < notices.length; idx++) {
        if (notices[idx].id === Number.parseInt(req.params.id)) {
            foundIdx = idx;
            break
        }
    }
    if (foundIdx >= 0) {
        notices.splice(foundIdx, 1);
        res.status(204);
        res.end();
    } else {
        res.status(404);
        res.end();
    }
});

app.post("/api/search", multer().none(), (req, res) => {
    for (let [key, value] of Object.entries(req.body)) {
        console.log(key + " = " + value);
    }
    res.end("Nothing found");
});

// Start running the server.
app.listen(port, () => {
    console.log(`Week 14 sending data application available on port ${port}`)
});
