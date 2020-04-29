import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../../components/Task';

class TaskBoard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          tasks: [
              {
                  id: 1,
                  name: 'ทำโปรเจค Computer vision',
                  status: true,
                  description: 'ยังไม่รู้เลยว่าจะทำอะไรดี',
              },
              {
                id: 2,
                name: 'ทำ Document',
                status: false,
                description: 'ยังไม่รู้เลยว่าจะทำอะไรดี',
              },
            ],
        };
    }

    render(){
        const { tasks } = this.state;
        const { history } = this.props;
        return(
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
        );
    }
}

TaskBoard.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

export default TaskBoard;