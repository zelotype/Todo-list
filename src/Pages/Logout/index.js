import React from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
  componentDidMount() {
    sessionStorage.clear();
  }

  render() {
    return <Redirect to="/login" />;
  }
}

export default Logout;