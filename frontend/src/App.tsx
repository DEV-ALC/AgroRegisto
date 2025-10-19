import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgricultoresList from "./pages/Agricultor/AgricultoresList";
import AgricultorCreate from "./pages/Agricultor/AgricultorCreate";
import AgricultorEdit from "./pages/Agricultor/AgricultorEdit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgricultoresList />} />
        <Route path="/agricultores" element={<AgricultoresList />} />
        <Route path="/agricultores/novo" element={<AgricultorCreate />} />
        <Route path="/agricultores/:id/editar" element={<AgricultorEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
