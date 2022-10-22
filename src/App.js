import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ForgetPassword from './pages/Password/ForgetPassword';
import ResetPassword from './pages/Password/ResetPassword';
import Register from './pages/Register/Register';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forget-password" component={ForgetPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
