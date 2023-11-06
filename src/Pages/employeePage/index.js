// import { useDispatch, useSelector } from 'react-redux';
// import { Row, Col, Form, Input, Select } from 'antd'
// // import { WizardWrapper } from '../../components/styled';

// import Heading from '../../components/heading/heading';
// import { useState } from 'react';
// import { openNotificationWithIcon } from '../../services/helper/ui';
// import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
// // import * as EmployeeActions from 'redux/Currencies/CurrenciesSlice'
// import { Button } from '../../components/buttons/buttons';
// import { Link } from 'react-router-dom';

// import TextArea from 'antd/es/input/TextArea';

// function EmployeePage() {

//   const path = "/admin"
//   const [form] = Form.useForm();
//   const{Option}=Select
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState([])

//   const done =  () => {

//     const EmployeeData = form.getFieldsValue()

//       const addedEmployee = {
//        userName:EmployeeData.userName,
//        message:EmployeeData.message,
//        status:EmployeeData.status

//       }

//       console.log("added", addedEmployee)

//   }
//   return (
//     <>
//       <div className="container">
//         <div className="w-[580px] sm:px-[25px] mx-auto pt-4 pb-4 rounded-md bg-white border-8 border-solid border-black shadow-md">
//           <Row justify="center">
//             <Col sm={22} xs={24}>
//               <div className='flex justify-between '>
//                 <Heading as="h4" className="mb-[38px] justify-center text-center text-xl md:text-lg ssm:text-base font-semibold">
//                 consultation  information
//                 </Heading>

//               </div>
//               <Form form={form} name="account" onFinish={done} >
//                 <Form.Item
//                 required
//                   className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 dark:[&>.ant-form-item-row>div>div>div>input]:bg-[#282b36] [&>.ant-form-item-row>div>div>div>input]:rounded-4 dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 [&>.ant-form-item-row]:flex-col [&>div>.ant-form-item-label]:text-start dark:[&>.ant-form-item-row>div>label]:text-white60"
//                   name="userName"
//                   label="user Name"
//                 >
//                    <Select placeholder='select bank'>
//                             {/* {users.map((user) =>
//                               <Option value={user.userName} >{user.userName} </Option>
//                             )} */}
//                           </Select>
//                 </Form.Item>
//                 <Form.Item
//                 required
//                   className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 dark:[&>.ant-form-item-row>div>div>div>input]:bg-[#282b36] [&>.ant-form-item-row>div>div>div>input]:rounded-4 dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 [&>.ant-form-item-row]:flex-col [&>div>.ant-form-item-label]:text-start dark:[&>.ant-form-item-row>div>label]:text-white60"
//                   name="message"
//                   label="message"
//                 >
//                   <TextArea />
//                 </Form.Item>
//                 <Form.Item
//                 required
//                   className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 dark:[&>.ant-form-item-row>div>div>div>input]:bg-[#282b36] [&>.ant-form-item-row>div>div>div>input]:rounded-4 dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 [&>.ant-form-item-row]:flex-col [&>div>.ant-form-item-label]:text-start dark:[&>.ant-form-item-row>div>label]:text-white60"
//                   name="EmployeeCodeArabic"
//                   label="status"
//                 >
//                       <Select placeholder='select status'>
//                       <Option value="completed" >completed </Option>
//                       <Option value="completed" >pending </Option>
//                           </Select>
//                 </Form.Item>

//                 <Button
//                   type='primary'
//                   size='large'
//                   htmlType="submit"
//                   className='mx-auto block'
//                 >
//                    Add a consultation
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </>
//   )
// }
// export default EmployeePage

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./EmployeePage.css"; // Import your custom CSS file for styling

function EmployeePage() {
  const [formData, setFormData] = useState({
    userName: "",
    message: "",
    status: "",
  });

  //   const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // setFormData({})
    // Handle form submission here, e.g., send data to an API
    // After submission, you can redirect to another page
    // history.push('/success'); // Change '/success' to your desired success page
  };

  return (
    <div className="employee-form-container">
      <h2 className="form-heading mt-5">Consultation Information</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input
          className=" form-control"
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Report</label>
          <textarea
          className=" form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={15}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="d-flex justify-content-center align-content-center mt-5">
          <button type="submit" className="submit-button ">
            Add a Consultation
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeePage;
