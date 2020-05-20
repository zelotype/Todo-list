import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ImageUploader from '../../components/ImageUploader';
import { register } from '../../common/register';

const Main = Styled.div`
  width: 100%;
  height: 100%;
  background-color: #F8F9F9;
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
                fname: '',
                lname: '',
                imageUrl: '',
                email: '',
                password: ''
            },
            error: false,
            allowRedirect: false,
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { newUser } = this.state;
        try {
            await register(newUser);
            this.setState({allowRedirect: true});
        } catch(e) {
            this.setState({
                error: true,
            })
        }

    }

    handleChangefname = e => {
        const value = e.target.value;

        this.setState(prevState => ({
        ...prevState,
        newUser: {
            ...prevState.newUser,
            fname: value,
        },
        }));
    }

    handleChangelname = e => {
        const value = e.target.value;

        this.setState(prevState => ({
        ...prevState,
        newUser: {
            ...prevState.newUser,
            lname: value,
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
        const { newUser, error, allowRedirect } = this.state;
        const { history } = this.props;

        if (allowRedirect) {
            return <Redirect to="/" />;
          }

        return(
            <Main>
                <RegisterForm>
                    <h2 className="text-center font-bold">สมัครสมาชิก</h2>
                    <hr />
                    {error && (
                        <p className="text-danger">เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง โปรดลองใหม่อีกครั้ง</p>
                    )}
                    <form>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="fname">ชื่อ</label>
                                <input
                                    type="text"
                                    id="fname"
                                    className="form-control"
                                    placeholder="ชื่อ"
                                    onChange={this.handleChangefname}
                                />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="lname">นามสกุล</label>
                                <input
                                    type="text"
                                    id="lname"
                                    className="form-control"
                                    placeholder="นามสกุล"
                                    onChange={this.handleChangelname}
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
                                        onClick={this.handleSubmit}
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