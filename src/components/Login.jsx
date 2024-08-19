import React, { useState, useContext } from "react";
import UserContext from "../context/useContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <p>Context Api</p>
      <form action="">
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <input
          type=""
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handelSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
