import React, { useState } from "react";
import style from "./form.module.css";

export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("form is submitted");
    console.log(user);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className={style.formGroup}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className={style.formGroup}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
