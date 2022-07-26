import React from "react";
import "./login.css";
import { auth } from "../../config/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const navigate = useNavigate();
  //getting email or password
  const userEmail = "admin";

  const userPassword = "1234";
  //function to submit form data while pressing submit button
  const onSubmit = async (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
    setPassword("");
    setEmail("");
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      toast.success(`welcome ${email}`);
      navigate("/");
    } catch (err) {
      toast.error("somthing wrong");
    }
  };
    // condition to check form input data
    //   if (email === userEmail && password === userPassword) {
    //     toast.success("Login Success");
    //     navigate('/customer');
    //   } else {
    //     toast.error("invalid email or password");
    //   }
    // };

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
            <form onSubmit={onSubmit}>
              <input
                type="text"
                id="email"
                className="fadeIn second"
                name="email"
                placeholder="login"
                //following two lines used to target and bind data of input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="off"
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
            {allEntry.map((a) => {
              return (
                <div keu={a.id} className="showDateStyle">
               
                  <p>{a.email}</p>
                  <p>{a.password}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };


export default Login;
