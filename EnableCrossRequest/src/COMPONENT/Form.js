import React, { useContext, useState } from "react";
import style from "./form.module.css";
import {
  BrowserRouter,
  Link,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LogOutComponent from "./LogOutComponent";
import AuthProvider from "./security/AuthContext";
import { AuthContext, useAuth } from "./security/AuthContext";
import axios from "axios";
function AuthenticatedRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) return children;

  return <Navigate to="/ " />;
}
export default function Form() {
  return (
    <div className="Form">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route
              path="/welcome/:user"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponent />
                </AuthenticatedRoute>
              }
            />
            <Route path="*" element={<ErrorComponent />} />
            <Route
              path="/logOut"
              element={
                <AuthenticatedRoute>
                  <LogOutComponent />
                </AuthenticatedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
        <FooterComponent />
      </AuthProvider>
    </div>
  );
}

function LoginComponent() {
  const [user, setUser] = useState("udemy");
  const [email, setEmail] = useState("udemy@gmail.com");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setshowErrorMessage] = useState(false);
  const navigate = useNavigate();

  const authContext = useAuth();
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
    if (authContext.login(user, email, password)) {
      navigate(`/welcome/${user}`);
    } else {
      setshowErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      <center>
        <h1>Time to Login!</h1>

        {showErrorMessage && (
          <div className="successMessage">
            Authenticated Failed.Please check your log in page.
          </div>
        )}

        <h1>Registration</h1>
        <form action="" onSubmit={handelSubmit}>
          <div className={style.formGroup}>
            <label htmlFor="name">Name: </label>
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
            <label htmlFor="email">Email: </label>
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
            <label htmlFor="password">Password: </label>
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
            <button className="btn btn-success" type="submit">
              Register
            </button>
          </div>
        </form>
      </center>
    </div>
  );
}

function WelcomeComponent() {
  const { user } = useParams();
  function callHelloWroldRestAPI() {
    //axios
    axios
      .get("http://localhost:8080/hello-world")
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
  }
  function successfulResponse(response) {
    console.log(response);
  }
  function errorResponse(error) {
    console.log(error);
  }
  return (
    <div className="Welcome">
      <center>
        <h1>Welcome {user}</h1>
        <div>
          Manage Your todos-<a href="/todos">Go Here</a>
          Manage Your todos-<Link to="/todos">Go Here</Link>
        </div>
        <div>
          <button className="btn btn-success" onClick={callHelloWroldRestAPI}>
            Call Hello World REST API
          </button>
        </div>
      </center>
    </div>
  );
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
    <div className="container">
      <div>
        <table className="table">
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

function HeaderComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  function logOut() {
    authContext.logOut();
  }
  return (
    <div>
      <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand ms-2 fs-2 fw-bold text-black">
                in28minutes
              </a>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item fs-5">
                    {isAuthenticated && (
                      <Link className="nav-link" to="/welcome/in28minutes">
                        Home
                      </Link>
                    )}
                  </li>
                  <li className="nav-item fs-5">
                    {isAuthenticated && (
                      <Link className="nav-link" to="/todos">
                        Todos
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                  {!isAuthenticated && (
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  )}
                </li>
                <li className="nav-item fs-5">
                  {isAuthenticated && (
                    <Link className="nav-link" onClick={logOut} to="/logOut">
                      Logout
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

function FooterComponent() {
  const authContext = useContext(AuthContext);
  return (
    <div className="footer">
      <center>
        <div className="container" style={{ Bottom: 0 }}>
          your footer
        </div>
      </center>
    </div>
  );
}
