import React, { useState } from "react";
import "./Forms.css";

function Forms() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const resetFunc = () => {
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      gender: "",
      subject: "",
    });
  };

  return (
    <div className="container">
      <h1>Forms in react</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">firstname</label>
        <input
          type="text"
          placeholder="Enter your first name"
          name="firstname"
          onChange={(e) => handleChange(e)}
          value={values.firstname}
        />
        <label htmlFor="lastname">lastname</label>
        <input
          type="text"
          placeholder="Enter your last name"
          name="lastname"
          onChange={(e) => handleChange(e)}
          value={values.lastname}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          placeholder="Enter your mail"
          name="email"
          onChange={(e) => handleChange(e)}
          value={values.email}
        />
        <label htmlFor="contact">contact</label>
        <input
          type="text"
          placeholder="Enter your phone no."
          name="contact"
          onChange={(e) => handleChange(e)}
          value={values.contact}
        />
        <label htmlFor="gender">gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => handleChange(e)}
          checked={values.gender === "male"}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => handleChange(e)}
          checked={values.gender === "female"}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          onChange={(e) => handleChange(e)}
          checked={values.gender === "other"}
        />
        Other
        <label htmlFor="subjet">subject</label>
        <select name="subject" id="subject" onChange={(e) => handleChange(e)}>
          <option value="Math">Math</option>
          <option value="Physics">Physics</option>
          <option value="English">English</option>
        </select>
        <button type="button" onClick={resetFunc}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forms;
