import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import ImageUploader from '../../components/ImageUploader';

const Main = Styled.div`
  width: 100%;
  height: 100%;
  background-color: #00cc99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegisterForm = Styled.div`
  width: 50%;
  background-color: white;
  border-radius: 5px;
  padding: 3%;
`;

const ImageWrapper = Styled.div`
  height: 200px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  display: inline-block;
  padding: 8px;
`;

const Image = Styled.img`
  height: 100%;
`;

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                firstName: '',
                lastName: '',
                imageUrl: '',
                email: '',
                password: ''
            }
        }
    }

    handleChangeFirstName = e => {
        const value = e.target.value;

        this.setState(prevState => ({
        ...prevState,
        newUser: {
            ...prevState.newUser,
            firstName: value,
        },
        }));
    }

    handleChangeLastName = e => {
        const value = e.target.value;

        this.setState(prevState => ({
        ...prevState,
        newUser: {
            ...prevState.newUser,
            lastName: value,
        },
        }));
    }

    handleChangeEmail = e => {
        const value = e.target.value;

        this.setState(prevState => ({
        ...prevState,
        newUser: {
            ...prevState.newUser,
            email: value,
        },
        }));
    }

    handleChangePass = e => {
        const value = e.target.value;

        this.setState(prevState => ({
        ...prevState,
        newUser: {
            ...prevState.newUser,
            password: value,
        },
        }));
    }

    handleUploadImage = url => {
        this.setState(prevState => ({
            ...prevState,
            newUser: {
              ...prevState.newUser,
              imageUrl: url,
            },
          }));
    }

    render(){
        const { newUser } = this.state;
        const { history } = this.props;

        return(
            <Main>
                <RegisterForm>
                    <h2 className="text-center font-bold">สมัครสมาชิก</h2>
                    <hr />
                    <form>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="firstName">ชื่อ</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    className="form-control"
                                    placeholder="ชื่อ"
                                    onChange={this.handleChangeFirstName}
                                />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="lastName">นามสกุล</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control"
                                    placeholder="นามสกุล"
                                    onChange={this.handleChangeLastName}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="image">รูปโปรไฟล์</label>
                            { newUser.imageUrl ? (
                                <div>
                                    <ImageWrapper>
                                        <Image src={newUser.imageUrl} />
                                    </ImageWrapper>
                                </div>
                            ) : (
                                <ImageUploader
                                    prefixFileName="profile"
                                    onUpload={this.handleUploadImage}
                                />
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">อีเมล</label>
                            <input
                                type="text"
                                id="email"
                                className="form-control"
                                placeholder="อีเมล"
                                onChange={this.handleChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass">รหัสผ่าน</label>
                            <input
                                type="password"
                                className="form-control"
                                id="pass"
                                placeholder="รหัสผ่าน"
                                onChange={this.handleChangePass}
                            />
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        onClick={this.handleRegister}
                                    >
                                    สมัครสมาชิก
                                    </button>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        onClick={() => {
                                            history.push("/login")
                                        }}
                                    >
                                    ยกเลิก
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </RegisterForm>
            </Main>
        );
    }
}

Register.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

export default Register;