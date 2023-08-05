import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboardLayout from "./pages/admin/AdminDashboardLayout";
import UserDashboardLayout from "./pages/user/UserDashboardLayout";
import AdminHome from "./pages/admin/AdminHome";
import Login from "./pages/Login";
import NewSale from "./pages/Newsale";
import Batch from "./pages/admin/Batch";
import Medicine from "./pages/admin/Medicine";
import Supplier from "./pages/admin/Supplier";
import Category from "./pages/admin/Category";
import GenericName from "./pages/admin/GenericName";
import Manufacturer from "./pages/admin/Manufacturer";
import Users from "./pages/admin/UsersList";
import SaleHistory from "./pages/SaleHistory";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<AdminDashboardLayout />}>
            <Route path="/dashboard" element={<AdminHome />} />
            <Route path="new-sale" element={<NewSale />} />
            <Route path="batch" element={<Batch />} />
            <Route path="medicine" element={<Medicine />} />
            <Route path="supplier" element={<Supplier />} />
            <Route path="category" element={<Category />} />
            <Route path="generic-name" element={<GenericName />} />
            <Route path="manufacturer" element={<Manufacturer />} />
            <Route path="users" element={<Users />} />
            <Route path="sale-history" element={<SaleHistory />} />
            <Route path="*" element={<div>Sorry Page Not Found</div>} />
          </Route>
          <Route path="/" element={<UserDashboardLayout />}>
            <Route path="about" element={<div>about</div>} />
          </Route>
          <Route path="*" element={<div>Sorry Page Not Found😋</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
