import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    IconButton,
    Grid,
  } from '@material-ui/core';
  import CheckIcon from '@material-ui/icons/CheckCircleOutline';
  import DeleteIcon from '@material-ui/icons/Delete';
  import { green, red } from '@material-ui/core/colors';
  import { Link } from 'react-router-dom';
  import ConfirmDeleteBox from '../ConfirmDeleteBox';
  import { deleteTask } from '../../api/backendApi';

class Task extends Component {
    constructor(props){
        super(props);

        this.state = {
            isConfirmDeleteTask : false,
            deleteTask: null,
        }
    }

    toggleConfirmDeleteTask = () => {
        this.setState(prevState => ({
            isConfirmDeleteTask: !prevState.isConfirmDeleteTask,
          }));
    }

    handleToggleDeleteTask = (id) => {
        this.setState({ 
            deleteTask: id,
            isConfirmDeleteTask: true,
         });
    }

    handleDeleteTask = async () => {
        const taskId = this.state.deleteTask;
        const memberId = JSON.parse(sessionStorage.getItem("userInfo")).id;
        
        await deleteTask(memberId, taskId);
        
        this.setState({
            deleteTask: null, 
        });

        window.location.reload(false);
    }

    render(){
        const { tasks } = this.props;
        const { isConfirmDeleteTask } = this.state;
        return(
            <div>
                {tasks &&
                    tasks.map(task => (
                        <div key={task.id} className="mb-2">
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Grid container wrap="nowrap" className="m-auto">
                                        <Grid item className="mr-2">
                                            <Link to={`/task/${task.id}`}>{task.name}</Link>
                                        </Grid>
                                        { task.status && (
                                            <Grid item>
                                                <CheckIcon style={{ color: green[500] }}/>
                                            </Grid>
                                        )}
                                    </Grid>
                                    <IconButton onClick={() => this.handleToggleDeleteTask(task.id)} aria-label="Edit">
                                        <DeleteIcon style={{ color: red[500] }} />
                                    </IconButton>
                                </ExpansionPanelSummary>
                            </ExpansionPanel>
                        </div>
                    ))
                }
                <ConfirmDeleteBox
                    subtitle="ยืนยันการลบ"
                    isOpen={isConfirmDeleteTask}
                    onDelete={this.handleDeleteTask}
                    onCancel={this.toggleConfirmDeleteTask}
                />
            </div>
        );
    }
}

Task.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
            deadline: PropTypes.string,
            created_timestamp: PropTypes.string,
            status: PropTypes.bool,
        }).isRequired,
    ),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
      }).isRequired,
}


export default Task;