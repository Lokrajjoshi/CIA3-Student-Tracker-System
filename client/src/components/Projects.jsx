import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/events")
      .then((res) => setProjects(res.data))
      .catch(() => alert("Unable to load projects."));
  }, []);

  const deleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      axios
        .delete(`http://localhost:3001/api/events/${id}`)
        .then(() => {
          alert("Project deleted successfully.");
          setProjects(projects.filter((project) => project._id !== id));
        })
        .catch(() => alert("Unable to delete project."));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl bg-white p-5">
        <h1 className="mb-4 text-2xl font-bold">
          Student Project Tracking System
        </h1>
        <Link
          to="/create"
          className="mb-4 inline-block bg-blue-600 px-4 py-2 text-white"
        >
          Add Project
        </Link>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th>Register No.</th>
                <th>Student</th>
                <th>Project</th>
                <th>Technology</th>
                <th>Guide</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id}>
                  <td>{project.regNo}</td>
                  <td>{project.studentName}</td>
                  <td>{project.projectTitle}</td>
                  <td>{project.techUsed}</td>
                  <td>{project.guideName}</td>
                  <td className="capitalize">
                    {project.projectStatus}
                  </td>
                  <td>
                    <Link
                      to={`/update/${project._id}`}
                      className="mr-2 bg-green-600 px-3 py-1 text-white"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProject(project._id)}
                      className="bg-red-600 px-3 py-1 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {projects.length === 0 && (
          <p className="mt-3">No projects added yet.</p>
        )}
      </div>
    </div>
  );
}
