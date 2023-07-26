import React, { useState } from "react";
import style from "./form.module.css";
import { BrowserRouter,useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export default function Form() {
  return (
    <div className="Form">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/welcome" element={<WelcomeComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function LoginComponent() {
  const [user, setUser] = useState("udemy");
  const [email, setEmail] = useState("udemy@gmail.com");
  const [password, setPassword] = useState("");
  const [showSuccesMessage, setshowSuccesMessage] = useState(false);
  const [showErrorMessage, setshowErrorMessage] = useState(false);
   const navigate=useNavigate();
  function handleChange(event) {
    setUser(event.target.value);
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handelSubmit() {
    if (
      user === "udemy" &&
      email === "udemy@gmail.com" &&
      password === "udemy"
    ) {
      setshowSuccesMessage(true);
      setshowErrorMessage(false);
      navigate('/welcome');
    } else {
      setshowSuccesMessage(false);
      setshowErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      {showSuccesMessage && (
        <div className="successMessage">Authenticated Successfully</div>
      )}
      {showErrorMessage && (
        <div className="successMessage">
          Authenticated Failed.Please check your log in page.
        </div>
      )}

      <h1>Registration</h1>
      <form action="" onSubmit={handelSubmit}>
        <div className={style.formGroup}>
          <lebel htmlFor="name">Name: </lebel>
          <input
            type="text"
            name="name"
            value={user}
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
            onChange={handleChangeEmail}
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
            onChange={handleChangePassword}
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

function WelcomeComponent() {
  return <div className="Welcome">Welcome Component</div>;
}
