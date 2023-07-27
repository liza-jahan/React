import React, { useState } from "react";
import style from "./form.module.css";
import { BrowserRouter, useNavigate, useParams } from "react-router-dom";
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
  return <div className="Welcome">Welcome {user}</div>;
}
function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>We are working really handleChangePassword</h1>
    </div>
  );
}

function ListTodosComponent() {
  const todos = [
    { id: 1, description: "Learn AWS" },
    { id: 2, description: "Learn Java" },
    { id: 3, description: "Learn PHP" },
  ];
  return (
    <div className="ListTodosComponent">
      <div>
        <table border={2}>
          <thead>
            <tr>
              <td>id</td>
              <td>description</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
