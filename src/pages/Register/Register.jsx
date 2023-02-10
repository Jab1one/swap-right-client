import "./Register.scss";
import { useParams, Link } from "react-router-dom";
import logo from "../../assets/images/right4.png"

const Register = ()=> {
  return (
    <div className="register-form-container">
      <form action="submit" className="register-form">

      <img src={logo} alt="swap-right logo" className="logo-img"></img>

      <p className="why-text">By registering for Swap Right, you gain access to a community of fellow traders eager to swap goods. Your personalized account allows you to post items, view and swipe on others' offerings, and securely chat with potential trade partners.</p>

        <div className="name-container">
          <input type='text' className="first-name" id="firstname" placeholder="Your first-name" required></input>
          <input type='text' className="last-name" id="lastname" placeholder="Your last-name" required></input>
        </div>

        <input type='text' className="register-form__email" id="email" placeholder="Your e-mail" required></input>

        <input type='text' className="register-form__username" id="username" placeholder="Choose your username" required></input>
        
        <input type='password' className="register-form__password" id="password" placeholder="Choose your password" required></input>

        <input type='password' className="register-form__password" id="password2" placeholder="Confirm your password" required></input>

        <input type='text' className="register-form__postal-code" id="username" placeholder="Postal Code" required></input>
         
        
        <button type="submit" className="register-form__button">Register</button>

      </form>
    </div>
  )
}

export default Register;