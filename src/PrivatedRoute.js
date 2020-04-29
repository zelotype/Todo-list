import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { isLogin } from './common/auth';

const PrivateRoute = props => {
  const { component } = props;
  const finalComponent = true ? component : () => <Redirect to="/login" />;

  return <Route {...props} component={finalComponent} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default PrivateRoute;
