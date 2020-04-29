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
  import { red } from '@material-ui/core/colors';
  import ConfirmDeleteBox from '../ConfirmDeleteBox';

class Friend extends Component {
    constructor(props){
        super(props);

        this.state = {
            isConfirmDeleteFriend : false
        }
    }

    toggleConfiemDeleteFriend = () => {
        this.setState(prevState => ({
            isConfirmDeleteFriend: !prevState.isConfirmDeleteFriend,
          }));
    }

    handleDeleteFriend = e => {

    }

    render(){
        const { friends } = this.props;
        const { isConfirmDeleteFriend } = this.state;
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
                                            <Avatar alt={friend.firstName} src={friend.imageUrl} />
                                        </Grid>
                                        <Grid item className="mt-auto mb-auto">
                                            <Typography className="m-auto">{friend.firstName} {friend.lastName}</Typography>
                                        </Grid>
                                    </Grid>
                                    <IconButton onClick={this.toggleConfiemDeleteFriend} aria-label="Edit">
                                        <DeleteIcon style={{ color: red[500] }} />
                                    </IconButton>
                                </ExpansionPanelSummary>
                            </ExpansionPanel>
                        </div>
                    ))
                }
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
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
        }).isRequired,
    ),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
      }).isRequired,
}


export default Friend;