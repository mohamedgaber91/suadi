

import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { openNotificationWithIcon } from "../../services/helper/ui";
import NavBar from "../../comps/NavBar/NavBar";
import PocketBase from "pocketbase";
import { useDispatch, useSelector } from "react-redux";
import { returnUrl } from "../../rtk/slices/UrlSlice";
import Heading from "../../components/heading/heading";
import { Modal, Button } from 'antd';

function UpdateUserInfo() {
  let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let regPass = /[!#%&$^&*()_+{[}]|]|[0-9]|[A-Z]/;
  let regPassNo = /[0-9]/;
  let regPassWord = /[A-Z]/;
  const navigate = useNavigate();
  // jwt of users
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(returnUrl());
  }, []);

  const apiUrl = useSelector((state) => state.urlValue.value);
  const pb = new PocketBase(apiUrl);
  const [userInfo, setUserInfo] = useState([pb.authStore.model]);
  console.log("user info is ", userInfo);
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
        document.getElementById("nameNote").classList.remove("visually-hidden");
      } else if (/\d/.test(e.target.value)) {
        document.getElementById("nameNote").innerHTML =
          "Name cannot contain numbers";
        document.getElementById("nameNote").classList.remove("visually-hidden");
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
        document.getElementById("passwordNote").innerHTML = `min length and please incloud one of ${regPass}`;
        document
          .getElementById("passwordNote")
          .classList.remove("visually-hidden");
      } else {
        document.getElementById("passwordNote").classList.add("visually-hidden");
      }
    } else if (e.target.name === "nameInput") {
      setUserData({ ...userData, name: e.target.value });
    }
  };

  const updateData = async () => {
    console.log("userData", userData);

    const pb = new PocketBase(apiUrl);

    // example create data
    const data = {
      username: userData.name,
      email: userData.email,
      password: userData.password,
      passwordConfirm: userData.password,
      name: userData.name,
      role: "g92k24f0ap50jsh",
      phone: userData.phone,
    };

    const record = pb.collection("users")
      .update(userInfo.id, data)
      .then((res) => {
        console.log(res);

        openNotificationWithIcon("success", "Your Information is updated");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        openNotificationWithIcon("error", "please enter avlid information");
      });
  };

    const logout = () => {
      Modal.confirm({
        title: 'Confirm',
        content: 'Are you sure you want to logout?',
        onOk() {
          pb.authStore.clear()
          navigate("/");
        },
        onCancel() {
     
        },
      })
    }
    
const deleteAccount=()=>{
  Modal.confirm({
    title: 'Confirm',
    content: 'Are you sure you want to Delete Your Account?',
    onOk() {
      pb.collection('users').delete(userInfo.id);
      navigate("/");
    },
    onCancel() {
 
    },
  });
  
}


  return (
    <>
      <NavBar />
      <div className="signIn">
        <Heading className="mb-6 text-xl font-semibold mb-5" as="h4">
          Welcome {userInfo.length>1?userInfo.username:"Our Client"}
        </Heading>
        <div className="mb-3 row">
          <label htmlFor="nameInput" className="col-sm-2 col-form-label">
            Name{" "}
          </label>
          <div className="col-sm-10 text-start">
            <input
              type="text"
              name="nameInput"
              className="form-control"
              id="nameInput"
              value= {userInfo.length>1?userInfo.username:"" } 
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
              type="email"
              name="emailInput"
              className="form-control"
              id="emailInput"
              value={userInfo.length>1?userInfo.email:""}
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
              value={userInfo.phone}
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
        <div className="mb-5 row" >
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10 text-start">
            <input
              type="password"
              maxLength={15}
              placeholder="Enter new password"
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
        <div className="d-flex justify-content-center gap-5  mt-5 ms-5">
          <button type="button" className="btn btn-success ms-5 " onClick={updateData}>
            Edit Your Account
          </button>
          <button type="button" className="btn btn-danger " onClick={logout}>
              Logout
            </button>
          <button type="button" className="btn btn-danger " onClick={deleteAccount}>
            Delete Your Account
          </button>
        </div>
      </div>
      
    </>
  );
}

export default UpdateUserInfo;
