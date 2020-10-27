import React from 'react';


const WelcomePage = () => (
  <div>
  <br/>
  <h1 className="landing">Please register or sign in</h1>
  <button href="/login" variant="info" block>Login</button>

  <button href="/register" variant="success" block>Sign Up</button>
 
  </div>
)

export default WelcomePage;