import React from 'react';
import { Redirect } from 'react-router-dom';
// import { logout } from '../../common/auth';

class Logout extends React.Component {
//   componentDidMount() {
//     logout();
//   }

  render() {
    return <Redirect to="/login" />;
  }
}

export default Logout;