import './AddPage.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import React from 'react'
// import HeaderPage from '../../comps/header';
import PhoneInput from "react-phone-input-2";
import { openNotificationWithIcon } from "../../services/helper/ui";
import PocketBase from 'pocketbase';
// import { returnUrl } from "../../rtk/slices/UrlSlice";



export default function AddPage() {

    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let regPass = /[!#%&$^&*()_+{[}]|]|[0-9]|[A-Z]/;
    let regPassNo = /[0-9]/;
    let regPassWord = /[A-Z]/;
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
    function sendData() {
        // console.log("userData", userData);
        if (document.getElementById("passwordNote")
            .classList.contains("visually-hidden")
            && document.getElementById("nameNote")
                .classList.contains("visually-hidden")) {
            console.log("userData", userData)
            //send userData to dataBase 


        } else {
            // Error twist appear for user
            console.log("Error userData"); }
    };

    return (
        <>
            {/* <HeaderPage /> */}
            <div className="signIn">
                <h3 className='m-5 text-primary'>Add Employee</h3>
                <div className="mb-3 row name">
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
                <div className="mb-3 row email">
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
                <div className="mb-3 row phone">
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
                <div className="mb-3 row pass">
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
                <div className="mt-5 add">
                    <Link to={""} className="btn btn-success p-0 ms-5">
                        <button type="button" className="btn btn-success " onClick={sendData}>
                            + Add New
                        </button>
                    </Link>
                </div>

            </div>
        </>
    )
}
