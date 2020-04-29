import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Main = Styled.div`
  width: 100%;
  height: 100%;
  background-color: #00cc99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginForm = Styled.div`
  width: 25%;
  min-width: 500px;
  background-color: white;
  border-radius: 5px;
  padding: 16px 16px;
`;

class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: null,
        pass: null,
        allowRedirect: false,
        isLoading: false,
      };
    }
  
    handleLogin = async () => {
      const { email, pass } = this.state;
      this.setState({ isLoading: true });
  
      if (!email || !pass) return;
  
      try {
        // await login(email, pass);
        // this.setState({ allowRedirect: true });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    };
  
    handleChangeEmail = e => {
      const email = e.target.value;
      this.setState({
        email,
      });
    };
  
    handleChangePass = e => {
      const pass = e.target.value;
      this.setState({
        pass,
      });
    };
  
    render() {
      const { allowRedirect, error, isLoading, email, pass } = this.state;
      const { history } = this.props;
  
      if (allowRedirect) {
        return <Redirect to="/" />;
      }
  
      return (
        <Main>
          <LoginForm>
            <form>
              {error && (
                <p className="text-danger">Email/Password อาจไม่ถูกต้อง โปรดลองใหม่อีกครั้ง</p>
              )}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={this.handleChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                  placeholder="Password"
                  onChange={this.handleChangePass}
                />
              </div>
              <div className="row">
                <div className="col text-center">
                    <button
                        className="btn btn-primary w-100"
                        onClick={() => {
                            history.push('/register')
                       }}
                        >
                        สมัครสมาชิก
                    </button>
                  </div>
                  <div className="col text-center">
                    {isLoading ? (
                        <button className="btn btn-primary w-100" type="button" disabled>
                        <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        />
                        &nbsp;Loading...
                        </button>
                    ) : (
                        <button
                        type="submit"
                        className="btn btn-primary w-100"
                        onClick={this.handleLogin}
                        disabled={!email || !pass}
                        >
                        เข้าสู่ระบบ
                        </button>
                    )}
                  </div>
              </div>
            </form>
          </LoginForm>
        </Main>
      );
    }
  }

  Login.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };
  
  
  export default Login;
  