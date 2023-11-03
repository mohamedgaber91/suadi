import { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { openNotificationWithIcon } from './../../services/helper/ui/index';
import HeaderPage from "../../comps/header";

function SignIn() {
    const navigate=useNavigate()
  let regEmail = /[#%&$^&*()_+{[}]|^[@.]|[@.]$|(@){2,10}/;

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  let handleOnChange = (email) => {
    if (email.target.name === "emailInput") {
      setUserData({ ...userData, email: email.target.value });
      if (email.target.value.includes(" ")) {
        document.getElementById("emailNote").innerHTML = "no space please";
        document
          .getElementById("emailNote")
          .classList.remove("visually-hidden");
      } else if (email.target.value.match(regEmail)) {
        document.getElementById("emailNote").innerHTML = "incorrect Email";
        document
          .getElementById("emailNote")
          .classList.remove("visually-hidden");
      } else {
        document.getElementById("emailNote").classList.add("visually-hidden");
      }
    } else if (email.target.name === "passwordInput") {
      setUserData({ ...userData, password: email.target.value });
      if (email.target.value.includes(" ")) {
        document.getElementById("passwordNote").innerHTML = "";
        document
          .getElementById("passwordNote")
          .classList.remove("visually-hidden");
      } else if (email.target.value.match(regEmail)) {
        document.getElementById("passwordNote").innerHTML =
          "incorrect password";
        document
          .getElementById("passwordNote")
          .classList.remove("visually-hidden");
      } else {
        document
          .getElementById("passwordNote")
          .classList.add("visually-hidden");
      }
    }
  };
  const sendData = () => {
    console.log("userData", userData);
    axios
      .post('http://192.168.43.123:1337/api/auth/local', {
        identifier: userData.email,
        password: userData.password,
      })
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
  
        // Save the JWT token to localStorage
        // localStorage.setItem("jwt", response.data.jwt);
  
        // Update the userData state if needed
        setUserData({
          email: response.data.user.email, // Update with user data from the response
          password: "", // You may or may not want to clear the password here
        });
  
        // Redirect the user to the home page
        navigate("/home");
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };
  
  return (
    <>
    <HeaderPage/>
    <div className="signIn">
      <div className="mb-3 row">
        <label
          htmlFor="exampleFormControlInput1"
          className="col-sm-2 col-form-label"
        >
          Email{" "}
        </label>
        <div className="col-sm-10 text-start">
          <input
            type="email"
            name="emailInput"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={(e) => handleOnChange(e)}
          />
          <span
            className="fs-6 fw-lighter text-danger visually-hidden"
            id="emailNote"
          >
            {" "}
            enter Email
          </span>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10 text-start">
          <input
            type="password"
            name="passwordInput"
            className="form-control"
            id="inputPassword"
            onChange={(e) => handleOnChange(e)}
          />
          <span
            className="fs-6 fw-lighter text-danger visually-hidden"
            id="passwordNote"
          >
            {" "}
            enter Email
          </span>
        </div>
      </div>
      <button type="button" className="btn btn-success " onClick={sendData}>
        Sign In
      </button>
      <Link to={"/signUp"} className="btn btn-warning p-0 ms-5">
        {" "}
        <button type="button" className="btn btn-warning text-white     ">
          Sign up
        </button>
      </Link>
    </div>
    </>
  );
}

export default SignIn;
