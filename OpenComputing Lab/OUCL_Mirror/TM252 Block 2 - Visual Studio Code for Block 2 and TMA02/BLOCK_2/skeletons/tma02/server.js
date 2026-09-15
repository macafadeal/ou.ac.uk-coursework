// Simple server providing static files and an API for TMA02
const express = require('express');
const multer = require('multer');

const app = express();
const port = 8080;

// Mount the static frontend files.
app.use(express.static('app'));

// Handle GET requests to the /api/feedback endpoint returning some body text.
app.get("/api/feedback", (req, res) => {
    res.send("Here is some feedback you may find useful");
    res.end();
});

// Handle GET requests to the /api/q-and-a endpoint, returning a JSON-formatted list.
app.get("/api/q-and-a", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify([
        {
            "id": 1,
            "question": "What is four times three?",
            "answer": "It is a mathematical operation where the number four is multiplied by the number three. The result is 12.",
        },
        {
            "id": 2,
            "question": "Friend or Foe?",
            "answer": "Friend",
        },
        {
            "id": 3,
            "question": "What format must the report be in?",
            "answer": "The report must be submitted as a Word document (.doc or .docx).",
        },
    ]));
    res.end();
});

// Handle POST requests to /api/q-and-a, logging the request data to the console.
app.post("/api/q-and-a", multer().none(), (req, res) => {
    for (let [key, value] of Object.entries(req.body)) {
        console.log(key + " = " + value);
    }
    res.end();
});

// Run the server.
app.listen(port, () => {
    console.log(`TMA02 application available on port ${port}`)
});
