import { useEffect, useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { openNotificationWithIcon } from './../../services/helper/ui/index';
import HeaderPage from "../../comps/header";
import PocketBase from 'pocketbase';
import { useDispatch, useSelector } from "react-redux";
import { returnUrl } from "../../rtk/slices/UrlSlice";
function SignIn() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(returnUrl())
    
  },[])
 
  const apiUrl=useSelector((state)=>state.urlValue.value)
  const pb = new PocketBase(apiUrl);
  const[userInfo,setUserInfo]=useState(pb.authStore.model)
  console.log("user info is ", userInfo)
  // console.log("api",apiUrl)

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
  const sendData =async () => {
    console.log("userData", userData);
    const pb = new PocketBase(apiUrl);
    const authData = await pb.collection('users').authWithPassword(
      userData.email,
      userData.password,
  ).then(()=>{
    openNotificationWithIcon("success","welcome");
    navigate('/signIn');
  }).catch((err)=>{
openNotificationWithIcon("error","faild to login , please enter your correct information")
  })
  
  // after the above you can also access the auth data from the authStore
  // console.log(pb.authStore.isValid);
  // console.log(pb.authStore.token);
  // console.log(pb.authStore.model.id);
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
      <div className="mt-5">
        <button type="button" className="btn  btn-primary " onClick={sendData}>
        Sign In
      </button>
      <Link to={"/signUp"} className="btn btn-success p-0 ms-5">
        {" "}
        <button type="button" className="btn btn-success text-white     ">
          Sign up
        </button>
      </Link>
      </div>
      
    </div>
    </>
  );
}

export default SignIn;
