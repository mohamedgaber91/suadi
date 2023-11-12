

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./EmployeePage.css";
import Quill from '../../comps/quill/quill';
import PocketBase from 'pocketbase';


function EmployeePage() {
  const [users, setUsers] = useState([])
  const [selectUsers, setSelectUsers] = useState(users)
  const [userData,setUserData]=useState()
  //   const history = useHistory();

  const getUsers = async () => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    // fetch a paginated records list
    const resultList = await pb.collection('employee').getList()
      .then((res) => {
        console.log(res.items[0].selectedUser)
        // setReports(res)
        var dd = res.items[0].selectedUser
        console.log("dd is ", dd)
        users.push(dd)
        console.log("users", selectUsers[0])
        setUserData(selectUsers[0])
      })
    // setUsers(resultList);
  //   const getUsers = resultList.items[0].selectedUser
  //   selectUsers.push(getUsers);
  //   console.log(selectUsers[0])
  }

  useEffect(() => {
    getUsers()
  }, [])



  const [formData, setFormData] = useState({
    userName: "",
    message: "",
    status: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.message = messageReport
    console.log(formData);

  };
  const handleQuillChange = (event) => {
    setMessageReport(event)
    // console.log(messageReport)
  };
  const [messageReport, setMessageReport] = useState('');

  return (
    <>
      <div className="signIn">
        <h3 className='m-5 text-primary'>Consultation Information</h3>
        <div className="mb-3 row userName mt-5">
          <label htmlFor="userName" className="col-sm-2 col-form-label">
            User Name
          </label>
          <div className="col-sm-10 text-start">
            <select
              required
              type="select"
              name="userName"
              className="form-control "
              id="userName"
              placeholder="userName"
              onChange={handleInputChange}
              defaultValue="chose"
            >
              <option disabled >chose</option>
              {userData?.map((el, index) => {
                console.log(el)
                return (
                  <option>{el}</option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="mb-3 row report mt-5">
          <label htmlFor="report" className="col-sm-2 col-form-label">
            Your Report
          </label>
          <div className="col-sm-10 text-start">
            <Quill value={messageReport} onChange={(value) => handleQuillChange(value)} />

          </div>
        </div>
        <div className="mb-3 row name mt-5">
          <label htmlFor="status" className="col-sm-2 col-form-label">
            status
          </label>
          <div className="col-sm-10 text-start">
            <select
              required
              type="select"
              name="status"
              className="form-control"
              id="status"
              placeholder="status"
              onChange={handleInputChange}
              defaultValue="chose"
            >
              <option disabled >chose</option>
              <option>completed</option>
              <option>pendding</option>

            </select>
          </div>
        </div>
        <div className="mt-5 add">
          <Link to={""} className="btn btn-success p-0 ms-5">
            <button type="button" className="btn btn-success " onClick={handleSubmit}>
              + Add Report
            </button>
          </Link>
        </div>

      </div>
    </>
  );
}

export default EmployeePage;
