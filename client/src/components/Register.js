import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
// import {Form,Button,Segment, Label} from "semantic-ui-react";
import ProtectedRoute from './ProtectedRoute';

const Register = (props) => {
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const passwordConfrimation = useFormInput("", "Password Confirmation");
  const firstName = useFormInput("","First Name");
  const lastName = useFormInput("", "Last Name");

  const { handleRegister } = useContext(AuthContext);
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    //check valid email
    if (password.value !== passwordConfrimation.value) {
      alert("passwords don not match");
    } else {
    
      // register user
      handleRegister({
    
        email: email.value,
        password: password.value,
        passwordConfrimation: passwordConfrimation.value,
        first_name: firstName.value,
        last_name: lastName.value
      },
      history
      );
    }
  };


  return (
    <container>
      <h1 className="landing">Register</h1>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input autoFocus {...email} />
        <p>First Name</p>
        <input autoFocus {...firstName} />
        <p>Last Name</p>
        <input autoFocus {...lastName} />
        <p>Password</p>
        <input type="password" {...password} />
        <p>Password Confirmation</p>
        <input type="password" {...passwordConfrimation} />
        <br />
        <br />
        <button variant="success" type="submit">Register</button>
      </form>
      <br />
      <button variant="info" href="/">Back</button>
    </container>
  );
};

export default Register;