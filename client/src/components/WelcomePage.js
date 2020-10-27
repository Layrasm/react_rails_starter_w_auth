import React from 'react';
import {Button, Container} from 'semantic-ui-css';

const WelcomePage = () => (
  <div>
  <Container>
  <h1 className="landing">Please register or sign in</h1>
  <Button href="/login" variant="info" block></Button>

  <Button href="/register" variant="success" block>Sign Up</Button>
  </Container>
  </div>
)

export default WelcomePage;