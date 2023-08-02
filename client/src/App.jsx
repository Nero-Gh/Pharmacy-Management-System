import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboardLayout from "./pages/admin/AdminDashboardLayout";
import UserDashboardLayout from "./pages/user/UserDashboardLayout";
import AdminHome from "./pages/admin/AdminHome";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<AdminDashboardLayout />}>
            <Route path="/dashboard" element={<AdminHome />} />
            <Route path="about" element={<div>about</div>} />
          </Route>
          <Route path="/" element={<UserDashboardLayout />}>
            <Route path="about" element={<div>about</div>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
