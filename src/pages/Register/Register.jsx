import "./Register.scss";
import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../assets/images/right4.png"
import axios from "axios";

const Register = ()=> {

  const [isvalid, setIsvalid] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (event.target.password.value !== event.target.password2.value ) {
      setIsvalid(false);
      console.log("password does not match");
      return;
    }
    setIsvalid(true);

    const firstName = event.target.firstname.value;
    const lastName = event.target.lastname.value;
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    const postalCode = event.target.postalCode.value;

    event.target.firstname.value = "";
    event.target.lastname.value = "";
    event.target.email.value = "";
    event.target.username.value = "";
    event.target.password.value = "";
    event.target.password2.value = "";
    event.target.postalCode.value = "";

    const newUser ={
      first_name: firstName,
      last_name: lastName,
      email,
      user_name: username,
      password,
      postal_code: postalCode
    };

    try {
      const response = await axios.post('http://localhost:8080/users', newUser);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }

  }


  return (
    <div className="register-form-container">
      <form action="submit" className="register-form" onSubmit={handleSubmit}>

      <img src={logo} alt="swap-right logo" className="logo-img"></img>

      <p className="why-text">By registering for Swap Right, you gain access to a community of fellow traders eager to swap goods. Your personalized account allows you to post items, view and swipe on others' offerings, and securely chat with potential trade partners.</p>

        <div className="name-container">
          <input type='text' className="first-name" id="firstname" placeholder="Your first-name" required></input>
          <input type='text' className="last-name" id="lastname" placeholder="Your last-name" required></input>
        </div>

        <input type='text' className="register-form__email" id="email" placeholder="Your e-mail" required></input>

        <input type='text' className="register-form__username" id="username" placeholder="Choose your username" required></input>
        
        <input type='password' className={`register-form__password ${isvalid ? "" : "invalid" }`} id="password" placeholder="Choose your password" autoComplete="off" required></input>

        <p className={`${isvalid ? "hide-invalid-text" : "invalid-text" }`}>Passwords must match</p>

        <input type='password' className={`register-form__password ${isvalid ? "" : "invalid" }`} id="password2" placeholder="Confirm your password" autoComplete="off" required></input>

        <input type='text' className="register-form__postal-code" id="postalCode" placeholder="Postal Code" required></input>
         
        
        <button type="submit" className="register-form__button">Register</button>

      </form>
    </div>
  )
}

export default Register;