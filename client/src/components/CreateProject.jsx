import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateProject() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    studentName: "", regNo: "", projectTitle: "", techUsed: "",
    guideName: "", projectStatus: "", submissionDate: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/api/events", form)
      .then(() => {
        alert("Project added successfully.");
        navigate("/");
      })
      .catch(() => alert("Unable to add project."));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="mx-auto max-w-xl bg-white p-5">
        <h1 className="mb-4 text-2xl font-bold">Add Student Project</h1>
        <label className="block">Register Number *</label>
        <input required name="regNo" value={form.regNo} onChange={handleChange} />
        <label className="block">Student Name *</label>
        <input required name="studentName" value={form.studentName} onChange={handleChange} />
        <label className="block">Project Title *</label>
        <input required name="projectTitle" value={form.projectTitle} onChange={handleChange} />
        <label className="block">Technology Used</label>
        <input name="techUsed" value={form.techUsed} onChange={handleChange} />
        <label className="block">Guide Name</label>
        <input name="guideName" value={form.guideName} onChange={handleChange} />
        <label className="block">Project Status *</label>
        <select required name="projectStatus" value={form.projectStatus} onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="proposed">Proposed</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
        <label className="block">Submission Date *</label>
        <input required type="date" name="submissionDate" value={form.submissionDate} onChange={handleChange} />
        <button className="bg-blue-600 px-4 py-2 text-white">Add Project</button>
        <Link to="/" className="ml-3 text-blue-700 underline">Back</Link>
      </form>
    </div>
  );
}
