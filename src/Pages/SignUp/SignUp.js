import { useEffect, useState } from "react";
import "./SignIn.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { openNotificationWithIcon } from "../../services/helper/ui";
import HeaderPage from "../../comps/header";
import PocketBase from 'pocketbase';
import { useDispatch, useSelector } from "react-redux";
import { returnUrl } from "../../rtk/slices/UrlSlice";
function SignUp() {
  let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let regPass = /[!#%&$^&*()_+{[}]|]|[0-9]|[A-Z]/;
  let regPassNo = /[0-9]/;
  let regPassWord = /[A-Z]/;
const navigate=useNavigate()
const dispatch=useDispatch()
// jwt of users
useEffect(()=>{
   dispatch(returnUrl())
},[])
const apiUrl=useSelector((state)=>state.urlValue.value)
// console.log("api",apiUrl)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  let handleOnChange = (e) => {
    if (e.target.name === "nameInput") {
      setUserData({ ...userData, name: e.target.value });
      if (e.target.value.length < 2) {
        document.getElementById("nameNote").innerHTML = "Invalid name";
        document
          .getElementById("nameNote")
          .classList.remove("visually-hidden");
      } else if (/\d/.test(e.target.value)) {
        document.getElementById("nameNote").innerHTML = "Name cannot contain numbers";
        document
          .getElementById("nameNote")
          .classList.remove("visually-hidden");
      } else {
        document.getElementById("nameNote").classList.add("visually-hidden");
      }
    } else if (e.target.name === "passwordInput") {
      setUserData({ ...userData, password: e.target.value });
      if (e.target.value.includes(" ")) {
        document.getElementById("passwordNote").innerHTML = "";
        document
          .getElementById("passwordNote")
          .classList.remove("visually-hidden");
      } else if (
        !e.target.value.match(regPass) ||
        !e.target.value.match(regPassNo) ||
        !e.target.value.match(regPassWord) ||
        e.target.value.length < 5
      ) {
        document.getElementById(
          "passwordNote"
        ).innerHTML = `min length and please incloud one of ${regPass}`;
        document
          .getElementById("passwordNote")
          .classList.remove("visually-hidden");
      } else {
        document
          .getElementById("passwordNote")
          .classList.add("visually-hidden");
      }
    } else if (e.target.name === "emailInput") {
      setUserData({ ...userData, email: e.target.value });
    }
  };
  const sendData = async() => {
    console.log("userData", userData);
   
    const pb = new PocketBase(apiUrl);
    
    
    
    // example create data
    const data = {
        "username": userData.name,
        "email": userData.email,
        "password":userData.password,
        "passwordConfirm":userData.password,
        "name": userData.name,
        "phone": userData.phone
    };
    
    const record =  pb.collection('users').create(data).then((res)=>{
      console.log(res);
      
     openNotificationWithIcon("success",`welcome ${userData.name}`)
     navigate("/signIn")
    })
    
    .catch((err)=>{
      console.log(err);
      openNotificationWithIcon("error","please enter avlid information")
    })
    
  };
  return (
    <>
    <HeaderPage/>
    <div className="signIn">
      <div className="mb-3 row">
        <label htmlFor="nameInput" className="col-sm-2 col-form-label">
          Name{" "}
        </label>
        <div className="col-sm-10 text-start">
          <input 
            required
            type="text"
            name="nameInput"
            className="form-control"
            id="nameInput"
            placeholder="Name"
            onChange={(e) => handleOnChange(e)}
          />
          <span
            className="fs-6 fw-lighter text-danger visually-hidden"
            id="nameNote"
          >
            {" "}
            {`don't use ${regEmail}`}{" "}
          </span>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="emailInput" className="col-sm-2 col-form-label">
          Email{" "}
        </label>
        <div className="col-sm-10 text-start">
          <input
            required
            type="email"
            name="emailInput"
            className="form-control"
            id="emailInput"
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
        <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
          Phone
        </label>
        <div className="col-sm-10 text-start">
          <PhoneInput
          
            country={"sa"}
            value={""}
            preferredCountries={["eg", "qa", "ku", "ae", "sa"]}
            onChange={(phone) => setUserData({ ...userData, phone })}
            inputStyle={{ width: "100%" }}
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
          required
            type="password"
            maxLength={15}
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
      <div className="mt-5">
        <button type="button" className="btn  btn-primary" onClick={sendData}>
        Sign Up
      </button>
      <Link to={"/signIn"} className="btn btn-success p-0 ms-5">
        {" "}
        <button type="button" className="btn btn-success ">
          Sign In
        </button>
      </Link>
      </div>
      
    </div>
    </>
  );
}

export default SignUp;
