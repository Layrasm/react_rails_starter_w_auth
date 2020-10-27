import React from 'react';
import { useHistory } from "react-router-dom";


const WelcomePage = () => {
  const history = useHistory();

  const login = () =>{ 
    let path = `login`; 
    history.push(path);
  }

  const register = () =>{ 
    let path = `register`; 
    history.push(path);
  }

  return(
  <div>
  <br/>
  <h1 className="landing">Please register or sign in</h1>
  <button onClick={login} variant="info" block>Login</button>

  <button onClick={register} variant="success" block>Sign Up</button>
 
  </div>
)}

export default WelcomePage;