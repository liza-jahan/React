import React, { useState } from "react";
import style from "./form.module.css";

export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  // const handelNameChange = (e) => {
  //   setUser({ name: e.target.value, email, password });
  // };
  // const handelEmailChange = (e) => {
  //   setUser({ name, email: e.target.value, password });
  // };

  // const handelPasswordChange = (e) => {
  //   setUser({ name, email, password: e.target.value });
  // };
 //or
  // const handleChange = (e) => {
  //   console.log("handelchange");
  //   const fileName = e.target.name;
  //   if (fileName === "name") {
  //     setUser({ name: e.target.value, email, password });
  //   } else if (fileName === "email") {
  //     setUser({ name, email: e.target.value, password });
  //   } else if (fileName === "password") {
  //     setUser({ name, email, password: e.target.value });
  //   }
  // };

  //or
  const handleChange = (e) => {
   setUser({...user,[e.target.name]:e.target.value});
  };
  const handelSubmit = (e) => {
    console.log("Submit");
    e.preventDefault();
  };
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handelSubmit}>
        <div className={style.formGroup}>
          <lebel htmlFor="name">Name: </lebel>
          <input
            type="text"
            name="name"
            value={name}
            id="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <lebel htmlFor="email">Email: </lebel>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <lebel htmlFor="password">Password: </lebel>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
