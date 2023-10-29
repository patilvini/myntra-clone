import loginImg from "../../assets/login.png";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card ">
        <img src={loginImg} alt="Login Image" className="login-img" />

        <div className="login-details">
          <h2 className="mb-30">
            Login <span>or</span> Signup
          </h2>
          <div className="login-div">
            <label className="normal-text-large login-span">+91 </label>
            <input className="mb-44 login-input" placeholder="Mobile Number" />
          </div>
          <p className="mb-44 normal-text-large">
            By continuing, I agree to the{" "}
            <span
              style={{ color: "#f42473", fontWeight: "bold", marginRight: 5 }}
            >
              Terms of Use
            </span>
            &
            <span
              style={{ color: "#f42473", fontWeight: "bold", marginLeft: 5 }}
            >
              Privacy Policy
            </span>
          </p>
          <button className="button-filled button-pink">CONTINUE</button>
          <p className="mt-52 normal-text-large">
            Have trouble in logging in ?{" "}
            <span
              style={{ color: "#f42473", fontWeight: "bold", marginLeft: 5 }}
            >
              Get help
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
