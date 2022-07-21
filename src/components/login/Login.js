import React from "react";
import "./login.css";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Icon */}
          <div className="fadeIn first">
            <img
              src="https://cdn.icon-icons.com/icons2/1983/PNG/512/_123037.png"
              id="icon"
              alt="User Icon"
            />
          </div>
          {/* Login Form */}
          <form action="" onSubmit={onSubmit}>
            <input
              type="text"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="login"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              value={email}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              value={password}
            />

            <input
              type="submit"
              className="fadeIn fourth"
              defaultValue="Log In"
            />
          </form>
          {/* Remind Passowrd */}
        </div>

         <div>
            {
              allEntry.map((a)=>{
                return (
                  <div className="showDateStyle">          <p>{a.email}</p>
                  <p>{a.password}</p>
                  </div>
                )
      

              })
            }
          </div>
        {/* <table class="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>

          {allEntry.map((a) => {
            <tr key={a.id}>
              <td>{a.email}</td>
              <td>{a.password}</td>
            </tr>;
          })}
        </table> */}
      </div>
    </div>
  );
};

export default Login;
