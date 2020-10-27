import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import ThingsDemo from "./things/ThingsDemo";
import { Container } from "semantic-ui-react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import WelcomePage from "./components/WelcomePage";


function App() {
  return (
    <>
      <FetchUser>
      <NavBar />
      <Container>
        <Switch>
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/ThingsDemo" component={ThingsDemo} />
          <Route exact path='/' component={WelcomePage}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Container>
      </FetchUser>
    </>
  );
}

export default App;