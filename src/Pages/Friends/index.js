import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Friend from '../../components/Friend';
import AppMenuBar from '../../components/AppMenuBar';

class Friends extends Component {      
    constructor(props){
        super(props);

        this.state = {
            friends: [],
        }
    }

    componentDidMount() {
        const member = JSON.parse(sessionStorage.getItem("userInfo"));
        const friends = member.friendCollection;
        this.setState({ friends });
    }

    render(){
        const { friends } = this.state;
        const { history } = this.props;
        return(
            <>
            <AppMenuBar />
            <div className="container pt-3 mt-3">
                <div className="d-flex flex-row justify-content-between">
                    <h2>เพื่อน</h2>
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => history.push('/searchfriend')}
                    >
                        ค้นหาเพื่อน
                    </button>
                </div>
                <hr />
                <Friend friends={friends}></Friend>
            </div>
            </>
        );
    }
}

Friends.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default Friends;