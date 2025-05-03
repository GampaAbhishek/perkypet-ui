import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
