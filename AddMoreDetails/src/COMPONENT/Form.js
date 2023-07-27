import React, { useState } from "react";
import style from "./form.module.css";
import { BrowserRouter, Link, useNavigate, useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export default function Form() {
  return (
    <div className="Form">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:user" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="*" element={<ErrorComponent />} />
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
  const navigate = useNavigate();
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
      navigate(`/welcome/${user}`);
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
  const { user } = useParams();
  return <div className="Welcome">
  <h1>Welcome {user}</h1>
  <div>
  Manage Your todos-<a href="/todos">Go Here</a>
  Manage Your todos-<Link to="/todos">Go Here</Link>
  </div>
  </div>;
}
function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>We are working really handleChangePassword</h1>
    </div>
  );
}

function ListTodosComponent() {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDate()
  );
  const todos = [
    { id: 1, description: "Learn AWS", done: false, targateDate: targetDate },
    { id: 2, description: "Learn Java", done: false, targateDate: targetDate },
    { id: 3, description: "Learn PHP", done: false, targateDate: targetDate },
  ];
  return (
    <div className="ListTodosComponent">
      <div>
        <table border={2}>
          <thead>
            <tr>
              <td>Id</td>
              <td>DEescription</td>
              <td>Is Done</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targateDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
