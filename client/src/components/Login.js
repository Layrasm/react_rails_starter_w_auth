import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
// import {Input,Button, Header, Label} from "semantic-ui-react";

const Login = (props) => {
  const history = useHistory();

  const { handleLogin } = useContext(AuthContext);
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);

    //api call here pass {email, password}
    handleLogin({ email: email.value, password: password.value }, history);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        
        <p>Email</p>
        <input autoFocus {...email} />
        
        
        <p>Password</p>
        <input type="password" {...password} />
        
        <button variant="info"type="submit">Login</button>
      </form>
      <br />
      <button variant="success" href="/">Back</button>
    </div>
  );
};



export default Login;