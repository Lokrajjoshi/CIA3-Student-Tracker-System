const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  regNo: { type: String, required: true },
  projectTitle: { type: String, required: true },
  techUsed: String,
  guideName: String,
  projectStatus: {
    type: String,
    enum: ["proposed", "ongoing", "completed"],
    required: true,
  },
  submissionDate: { type: Date, required: true },
});

module.exports = mongoose.model("Project", projectSchema);
