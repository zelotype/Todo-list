import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../../components/Task';
import AppMenuBar from '../../components/AppMenuBar';
import { getAllTask } from '../../api/backendApi';

class TaskBoard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          tasks: []
        };
    }

    async componentDidMount(){
        const memberId = JSON.parse(sessionStorage.getItem("userInfo")).id
        const taskList = await getAllTask(memberId);
        this.setState({tasks: taskList.data.content});
        console.log(this.state.tasks);
    }

    render(){
        const { tasks } = this.state;
        const { history } = this.props;
        return(
            <>
            <AppMenuBar />
            <div className="container pt-3 mt-3">
                <div className="d-flex flex-row justify-content-between">
                    <h2>งาน</h2>
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => history.push('/addtask')}
                    >
                        เพิ่มงาน
                    </button>
                </div>
                <hr />
                <Task tasks={tasks} />
            </div>
            </>
        );
    }
}

TaskBoard.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

export default TaskBoard;