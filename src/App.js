import { Route, Routes } from "react-router-dom";
import "./App.css";
// import NavBar from "./comps/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/About/About";
import Footer from "./comps/footer/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Services from "./comps/services/Services";
import UpdateUserInfo from "./Pages/updateUserInfo/updateUserInfo";
import AdminPage from "./Pages/adminPages/index";
import EmployeePage from "./Pages/employeePage";
import AddPage from "./Pages/addPage/AddPage";

export const backToTop = () => {
  window.scrollTo(0, 0);
};
export const switchMode = (darkMode) => {
  var modeIs;
  darkMode ? (modeIs = true) : (modeIs = false);
  return modeIs;
};

function App() {
  const modeIs = useSelector((state) => state.darkMode.mode);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App"
    style={{ background: modeIs ? "#212529" : "#fff" }} >
      <Routes>
        <Route path="/" element={<SignIn darkMode={modeIs} />}>
          {" "}
        </Route>
        <Route path="/home" element={<Home darkMode={modeIs} />}></Route>
        <Route
          path="/home/services"
          element={<Services darkMode={!modeIs} showNavbar="true" />}
        ></Route>

        <Route path="/about" element={<About darkMode={!modeIs} />}></Route>
        <Route
          path="/edituserinfo"
          element={<UpdateUserInfo darkMode={!modeIs} />}
        ></Route>

        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/admin" element={<AdminPage darkMode={modeIs} />}></Route>
        <Route path="/admin/employee/add" element={<AddPage darkMode={modeIs} />}></Route>
        <Route path="/employee" element={<EmployeePage />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
