import React, { Component } from 'react';
import Styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import ImageUploader from '../../components/ImageUploader';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AppMenuBar from '../../components/AppMenuBar';

const ImageWrapper = Styled.div`
  height: 200px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: inline-block;
  padding: 8px;
`;

const Image = Styled.img`
  height: 100%;
`;

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            member: {},
        }
    }

    componentDidMount(){
        this.setState({
            member: JSON.parse(sessionStorage.getItem("userInfo")),
        });
    }

    handleDeleteImageUrl = () => {
        this.setState(prevState => ({
          ...prevState,
          member: {
            ...prevState.member,
            imageUrl: null,
          },
        }));
      };

    render(){
        const { member } = this.state;
        const { history } = this.props;
        return(
            <>
            <AppMenuBar />
            <div className="container pt-3 pb-5 mt-3">
                <div className="d-flex flex-row justify-content-between">
                    <h2>โปรไฟล์</h2>
                </div>
                <hr />
                    <form>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="firstName">ชื่อ</label>
                                <input
                                    disabled
                                    type="text"
                                    id="firstname"
                                    className="form-control"
                                    placeholder="ชื่อ"
                                    value={member.fname}
                                    onChange={this.handleChangeFirstName}
                                />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="lastName">นามสกุล</label>
                                <input
                                    disabled
                                    type="text"
                                    id="lastName"
                                    className="form-control"
                                    placeholder="นามสกุล"
                                    value={member.lname}
                                    onChange={this.handleChangeLastName}
                                />
                            </div>
                        </div>
                        <div>
                            { member.imageUrl && (
                                <>
                                    <label htmlFor="image">รูปโปรไฟล์</label>
                                        <ImageWrapper>
                                            <Image src={member.imageUrl} />
                                        </ImageWrapper>
                                </>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">อีเมล</label>
                            <input
                                disabled
                                type="text"
                                id="email"
                                className="form-control w-50"
                                placeholder="อีเมล"
                                value={member.email}
                                onChange={this.handleChangeEmail}
                            />
                        </div>
                        <div className="row">
                        <div className="col-2 text-center mr-3">
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                onClick={() => {
                                    history.push("/")
                                }}
                            >
                            กลับไปหน้าหลัก
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            </>
        );
    }
}

export default Profile;