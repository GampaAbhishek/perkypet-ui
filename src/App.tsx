import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/HomePage";
import "./App.css";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
