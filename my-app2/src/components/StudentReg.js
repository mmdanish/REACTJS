import React, { useState } from "react";
import "./StudentReg.css";

export default function StudentReg() {
  const [datas, setDatas] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    contact: "",
    filename: "",
    department: "",
  });

  const handleChange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
    console.log(datas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datas);
  }

  const resetFunc = () => {
    setDatas({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    contact: "",
    filename: "",
    department: "",
    })
  }

  return (
    <div className="container">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          placeholder="Enter your firstname"
          name="firstname"
          onChange={(e) => handleChange(e)}
          value={datas.firstname}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          placeholder="Enter your lastname"
          name="lastname"
          onChange={(e) => handleChange(e)}
          value={datas.lastname}
        />
        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => handleChange(e)}
          checked={datas.gender === "male"}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => handleChange(e)}
          checked={datas.gender === "female"}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          onChange={(e) => handleChange(e)}
          checked={datas.gender === "other"}
        />
        Other
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your mail"
          name="email"
          onChange={(e) => handleChange(e)}
          value={datas.email}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          placeholder="Enter your mobile no."
          name="contact"
          onChange={(e) => handleChange(e)}
          value={datas.contact}
        />
        <label htmlFor="upload">Upload Certificates</label>
        <input type="file" name="filename" onChange={(e) => handleChange(e)} value={datas.filename} />
        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          onChange={(e) => handleChange(e)}
          value={datas.department}
        >
          <option value="computerscience">Computer Science</option>
          <option value="biology">Biology</option>
          <option value="history">History</option>
          <option value="commerce">Commerce</option>
        </select>
        <div className="button-group">
          <button type="button" className="reset-btn" onClick={resetFunc}>
            Reset
          </button>
          <button type="submit" className="reg-btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
