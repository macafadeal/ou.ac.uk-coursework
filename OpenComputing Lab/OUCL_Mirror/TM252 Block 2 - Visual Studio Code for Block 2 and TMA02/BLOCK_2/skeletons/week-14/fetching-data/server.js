// Simple server providing static files and an API.
const express = require('express');
const app = express();
const port = 8080;

// Mount the static frontend files.
app.use(express.static('app'));

// Handle GET requests to /api/notices, returning a JSON-formatted list of notices.
app.get("/api/notices", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify([
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
    ]));
    res.end();
});

// Handle GET requests to /api/notices/slow, returning a JSON-formatted list of notices after 3 seconds.
app.get("/api/notices/slow", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    setTimeout(() => {
        res.send(JSON.stringify([
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
        ]));
        res.end();
    }, 3000);
});

// Start running the server.
app.listen(port, () => {
    console.log(`Week 14 fetching data application available on port ${port}`)
});
