import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[400],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

const initialState = {
    task: {
        id: '',
        name: '',
        description: '',
        assignee: '',
        deadline: '',
        status: false,
    },
    friends: [],
};

class AddTask extends Component {
    constructor(props){
        super(props);

        this.state = initialState;
    }
    componentDidMount() {
        const { match } = this.props;
        const taskId = match.params.id || null;
        const taskInfo = {
            id: 1,
            name: 'ทำโปรเจค Computer vision',
            status: true,
            description: 'ยังไม่รู้เลยว่าจะทำอะไรดี',
            deadline: '',
            assignee: ''
        }
        const friends = [
            {
                id: 1,
                firstName: "Anusarn",
                lastName: "Tongsuk"
            },
            {
                id: 2,
                firstName: "Chayanin",
                lastName: "Lumyong"
            },
            {
                id: 3,
                firstName: "Pannita",
                lastName: "Hamego"
            },
        ]

        const task = taskId ? taskInfo : initialState.task;

        this.setState({task, friends});
    }

    handleChangeName = e => {
        const value = e.target.value;

        this.setState(prevState => ({
        ...prevState,
        task: {
            ...prevState.task,
            name: value,
        },
        }));
    }

    handleChangeDescription = e => {
        const value = e.target.value;

        this.setState(prevState => ({
        ...prevState,
        task: {
            ...prevState.task,
            description: value,
        },
        }));
    }

    handleChangeAssignee = e => {
        const value = e.target.value;

        this.setState(prevState => ({
        ...prevState,
        task: {
            ...prevState.task,
            assignee: value,
        },
        }));
    }

    handleChangeDeadline = e => {
        const value = e.target.value;

        this.setState(prevState => ({
        ...prevState,
        task: {
            ...prevState.task,
            deadline: value,
        },
        }));
    }

    handleChangeStatus = e => {
        const value = e.target.checked;

        this.setState(prevState => ({
        ...prevState,
        task: {
            ...prevState.task,
            status: value,
        },
        }));
    }


    render(){
        const { task, friends } = this.state;
        const { history } = this.props;
        return(
            <div className="container pt-3 mt-3">
                <div className="d-flex flex-row justify-content-between">
                    <input
                        type="text"
                        id="name"
                        className="form-control w-50"
                        placeholder="ชื่องาน ex. ทำการบ้าน"
                        value={task.name}
                        onChange={this.handleChangeName}
                    />
                    { task.id && (
                        <div className="form-group">
                            <GreenCheckbox
                                checked={task.status}
                                onChange={this.handleChangeStatus}
                                value={task.status}
                                color="success"
                            />
                            <label className="form-check-label">เสร็จสิ้น</label>
                        </div>
                    )}
                </div>
                <hr />
                <form>
                    <div className="form-group">
                        <label htmlFor="description">คำอธิบาย</label>
                        <textarea
                            rows="5"
                            id="description"
                            className="form-control w-50"
                            value={task.description}
                            onChange={this.handleChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">มอบหมายให้</label>
                        <select
                            className="form-control w-50"
                            value={task.assignee}
                            onChange={this.handleChangeAssignee}
                        >
                        <option value="">ไม่มอบหมายให้ใคร</option>
                        <option value="1234">ตนเอง</option>
                        {friends &&
                            friends.map(friend => (
                            <option value={friend.id} key={friend.id}>
                                {friend.firstName} {friend.lastName}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="deadline">วันครบกำหนด</label>
                        <input
                            type="date"
                            id="deadline"
                            value={task.deadline}
                            className="form-control w-50"
                            onChange={this.handleChangeDeadline}
                        ></input>
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
                            ยกเลิก
                            </button>
                        </div>
                        <div className="col-2 text-center">
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                onClick={this.handleSubmit}
                            >
                            บันทึก
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

AddTask.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

export default AddTask;