import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    IconButton,
    Grid,
    Typography,
    Avatar,
  } from '@material-ui/core';
  import DeleteIcon from '@material-ui/icons/Delete';
  import AddIcon from '@material-ui/icons/AddCircleOutline';
  import { red, green } from '@material-ui/core/colors';
  import ConfirmDeleteBox from '../ConfirmDeleteBox';

class Friend extends Component {
    constructor(props){
        super(props);

        this.state = {
            isConfirmDeleteFriend : false,
            friendId: null,
            addFriendStatus: false,
            member: {}
        }
    }

    componentDidMount() {
        const member = JSON.parse(sessionStorage.getItem("userInfo"));

        this.setState({member});
    }

    toggleConfiemDeleteFriend = () => {
        this.setState(prevState => ({
            isConfirmDeleteFriend: !prevState.isConfirmDeleteFriend,
          }));
    }

    toggleConfiemAddFriend = () => {
        this.setState(prevState => ({
            addFriendStatus: !prevState.addFriendStatus,
          }));
    }

    handleToggleDeleteFriend = (id) => {
        this.setState({ 
            friendId: id,
            isConfirmDeleteFriend: true,
         });
    }

    handleDeleteFriend = async () => {
        const { friends } = this.props;
        const { friendId, member } = this.state
        const updateFriend = friends.filter(friend => friend.id !== friendId);
        member.friendCollection = updateFriend;

        sessionStorage.setItem("userInfo", JSON.stringify(member));

        this.setState({
            friendId: null, 
        });

        window.location.reload(false);
    }

    handleAddFriend = (newFriend) => {
        const {  member } = this.state
        const friends = member.friendCollection;

        if(friends === null) {
            const updateFriend = [ {}, newFriend ];
            member.friendCollection = updateFriend;
        } else {
            const updateFriend = [...friends, newFriend];
            member.friendCollection = updateFriend;
        }

        sessionStorage.setItem("userInfo", JSON.stringify(member));

        this.setState({
            addFriendStatus: true,
        });
    }

    handleAllowDirect = () => {
        this.setState({ allowRedirect: true });
    }

    render(){
        const { friends, addFriend } = this.props;
        const { isConfirmDeleteFriend, addFriendStatus } = this.state;

        return(
            <div>
                {friends &&
                    friends.map(friend => (
                        <div key={friend.id} className="mb-2">
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Grid container wrap="nowrap" className="m-auto">
                                        <Grid item className="mr-3">
                                            <Avatar alt={friend.fname} src={friend.imageUrl} />
                                        </Grid>
                                        <Grid item className="mt-auto mb-auto">
                                            <Typography className="m-auto">{friend.fname} {friend.lname}</Typography>
                                        </Grid>
                                    </Grid>
                                    { addFriend ? (
                                        <IconButton onClick={() => this.handleAddFriend(friend)} aria-label="Edit">
                                        <AddIcon style={{ color: green[500] }} />
                                    </IconButton>
                                    ) : (
                                        <IconButton onClick={() => this.handleToggleDeleteFriend(friend.id)} aria-label="Edit">
                                            <DeleteIcon style={{ color: red[500] }} />
                                        </IconButton>
                                    ) }
                                </ExpansionPanelSummary>
                            </ExpansionPanel>
                        </div>
                    ))
                }
                <ConfirmDeleteBox
                    subtitle="เพิ่มเพื่อนสำเร็จ"
                    isOpen={addFriendStatus}
                    onCancel={this.toggleConfiemAddFriend}
                />
                <ConfirmDeleteBox
                    subtitle="ยืนยันการลบ"
                    isOpen={isConfirmDeleteFriend}
                    onDelete={this.handleDeleteFriend}
                    onCancel={this.toggleConfiemDeleteFriend}
                />
            </div>
        );
    }
}

Friend.propTypes = {
    memberId: PropTypes.number.isRequired,
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            fname: PropTypes.string,
            lname: PropTypes.string,
        }).isRequired,
    ),
    addFriend:  PropTypes.bool,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
}

Friend.defaultProps = {
    addFriend: false,
}


export default Friend;