import React, { useState } from "react";
import style from "./form.module.css";

export default function Form() {
  const [name,setName]=useState(' ');
  const [email,setEmail]=useState(' ');
  const [password,setPassword]=useState(' ');
  const handelNameChange =(e)=>{
   setName(e.target.value);

  }
  const handelEmailChange =(e)=>{
    setEmail(e.target.value);
  }

  const handelPasswordChange =(e)=>{
    setPassword(e.target.value);
  }
  const handelSubmit =(e)=>{
  e.preventDefault();
  }

  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handelSubmit}>
        <div className={style.formGroup}>
          <lebel htmlFor="name">Name: </lebel>
          <input type="text" name="name" value={name} id="name" onChange={handelNameChange} required />
        </div>
        <div className={style.formGroup}>
          <lebel htmlFor="email">Email: </lebel>
          <input type="email" name="email" id="email" value={email} onChange={handelEmailChange} required />
        </div>
        <div className={style.formGroup}>
          <lebel htmlFor="password">Password: </lebel>
          <input type="password" name="password" id="password" value={password} onChange={handelPasswordChange} required />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
