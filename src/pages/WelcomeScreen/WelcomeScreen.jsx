import "./WelcomeScreen.scss"
import logo from "../../assets/images/right4.png"
import { useParams, Link } from "react-router-dom";

const WelcomeScreen = ()=> {
  return (
    <div className="welcome-card">
      <div className="welcome-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="swap-logo" />
        </div>
      </div>
      <div className="links-container">
        <p className="login">Please <Link className="login-link" to="/login">login</Link> or <Link className="login-link" to="/register">register</Link> to continue</p>
      </div>
    </div>
  )
}

export default WelcomeScreen;