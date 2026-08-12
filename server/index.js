const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Project = require("./models/Project");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/student_tracker")
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("MongoDB connection failed"));

app.get("/api/events", (req, res) => {
  Project.find()
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({ message: "Unable to get projects" }));
});

app.get("/api/events/:id", (req, res) => {
  Project.findById(req.params.id)
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({ message: "Unable to get project" }));
});

app.post("/api/events", (req, res) => {
  Project.create(req.body)
    .then((data) => res.json(data))
    .catch(() => res.status(400).json({ message: "Invalid project details" }));
});

app.put("/api/events/:id", (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then((data) => res.json(data))
    .catch(() => res.status(400).json({ message: "Unable to update project" }));
});

app.delete("/api/events/:id", (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Project deleted" }))
    .catch(() => res.status(500).json({ message: "Unable to delete project" }));
});

app.listen(3001, () => console.log("Server running on port 3001"));
