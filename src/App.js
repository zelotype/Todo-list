import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from './PrivatedRoute';
import Logout from './Pages/Logout';
import TaskBoard from './Pages/TaskBoard';
import AddTask from './Pages/AddTask';
import Profile from './Pages/Profile';
import Friend from './Pages/Friends';
import SearchFriend from './Pages/SearchFriend';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={TaskBoard} />
          <PrivateRoute exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/addtask" component={AddTask} />
          <PrivateRoute exact path="/task/:id" component={AddTask} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/friend" component={Friend} />
          <PrivateRoute exact path="/searchfriend" component={SearchFriend} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
