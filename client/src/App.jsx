import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import UpdateProject from "./components/UpdateProject";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/create" element={<CreateProject />} />
        <Route path="/update/:id" element={<UpdateProject />} />
      </Routes>
    </BrowserRouter>
  );
}
