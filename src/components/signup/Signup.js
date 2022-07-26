import React, { useState, useEffect } from "react";
import { auth } from "../../config/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [array, setNewArray] = useState([]);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    setNewArray([...array, data]);
    // console.log(array);
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      toast.success(`welcome ${email}`);

      // toast.success("welcome user");
      navigate("/signin");
    } catch (err) {
      toast.error("somthing wrong");
    }
  };

  return (
    <div>
      <div className="container col-md-4">
        <h1 className="mt-5">Login Form</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            value={email}
            type="text"
            className="form-control"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            password={password}
            type="password"
            className="form-control"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
          <div className="col-auto mt-3">
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
