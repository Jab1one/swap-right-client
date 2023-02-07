import "./Login.scss";
import { useParams, Link } from "react-router-dom";

const Login = ()=> {
  return (
    <div className="login-form-container">
      <form action="submit" className="login-form">

        <input type='text' className="login-form__username" id="username" placeholder="Username" required></input>
        
        <input type='text' className="login-form__password" id="password" placeholder="Password" required></input>
        
        <div className="logged-container">
          <label for="keeploged" className="login-form__label">Keep me logged in:</label>
          <input type='checkbox' className="login-form-loged" id="keeploged"></input>
          <Link to="/" className="forgot-pass">Forgot your password ?</Link>
        </div>
        <button type="submit" className="login-form__button">Login</button>

      </form>
    </div>
  )
}

export default Login;