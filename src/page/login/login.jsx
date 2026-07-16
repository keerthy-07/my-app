import { Link } from "react-router";

const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>

      <input type="text" placeholder="Username" />

      <input type="password" placeholder="Password" /> 

      <button>Login</button>

      <p>Create New Account</p>

      <p>Forgot Password?</p>
      <Link to="/Home">
        <button onClick={() => null}>Home</button>
      </Link>
    </div>    
  );
};

export default Login;