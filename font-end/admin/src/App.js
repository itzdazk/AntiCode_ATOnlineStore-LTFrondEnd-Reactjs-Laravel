import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./admin/pages/Login";
import DefaultLayout from "./admin/pages/DefaultLayout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<DefaultLayout />} />
    </Routes>
  );
}

export default App;
