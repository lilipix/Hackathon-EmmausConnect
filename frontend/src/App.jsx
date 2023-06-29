import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TestNewSmartphone from "./components/UserComponents/TestNewSmartphone/TestNewSmartphone";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import TestNewSmartphone from "./components/UserComponents/TestNewSmartphone/TestNewSmartphone";
import UserHome from "./components/UserComponents/UserHome/UserHome";
import AdminHome from "./components/AdminComponents/AdminHome/AdminHome";import "react-toastify/dist/ReactToastify.css";

import "./App.css";
// import RequireAuth from "./components/routes/RequireAuth";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<RequireAuth allowedRoles="user" />}>
          <Route path="user/home" element={<Home />} />
        </Route>

        {/* <Route path="/home/" element={<Home />}>
          <Route index element={<UserHome />} />
        </Route>

        {/* <Route element={<RequireAuth allowedRoles="admin" />}> */}
        <Route path="/admin/home" element={<Admin />}>
          <Route index element={<AdminHome />} />
        </Route>

        {/* <Route path="/home/" element={<Home />}>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
        </Route> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
