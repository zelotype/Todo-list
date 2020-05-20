import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
  } from 'reactstrap';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import AppMenuBar from '../../components/AppMenuBar';
import { createTask, updateTask, getAllTask } from '../../api/backendApi';

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
    member: {},
    task: {
        name: '',
        description: '',
        assignee: '',
        deadline: '',
        status: false,
    },
    friends: [],
    taskId: null,
    error: false,
    isModalOpen: false,
    assigneeObj: '',
};

class AddTask extends Component {
    constructor(props){
        super(props);

        this.state = initialState;
    }
    async componentDidMount() {
        const { match } = this.props;
        const taskId = match.params.id || null;
        const member = JSON.parse(sessionStorage.getItem("userInfo"));
        const response = (await getAllTask(member.id)).data.content;
        const taskInfo = response.find(task => task.id == taskId);
        const friends = member.friendCollection;
        
        const task = taskId ? taskInfo : initialState.task;
        console.log(task);
        const deadline = task.deadLine;
        task.deadLine = deadline ? deadline.split(" ")[0] : '';
        const assigneeObj = taskId ? taskInfo.assignee : '';

        this.setState({
            task, 
            friends, 
            taskId, 
            member, 
            assigneeObj
        });
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
        const { friends, member } = this.state;
        const assignee = (value == member.id ) ? member : friends.find(friend => friend.id == value) ;
        const name =  assignee.fname + ' ' + assignee.lname;

        this.setState(prevState => ({
        ...prevState,
        assigneeObj: value,
        task: {
            ...prevState.task,
            assignee: name,
        },
        }));
    }

    handleChangeDeadline = e => {
        const value = e.target.value;

        this.setState(prevState => ({
        ...prevState,
        task: {
            ...prevState.task,
            deadLine: value,
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

    toggleModal = () => this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));

    handleSubmit = async (event) => {
        event.preventDefault();
        const { taskId, task, member } = this.state;
        const memberId = member.id;
        console.log(memberId);
        try{
            if(taskId === null) {
                console.log('create')
                await createTask(memberId, task);
            } else {
                console.log('update')
                await updateTask(memberId, task);
            }
            this.setState({isModalOpen: true});
        } catch(e) {
            console.log(e);
            this.setState({error: true});
        }
    }


    render(){
        const { task, friends, error, isModalOpen, assigneeObj, member } = this.state;
        const { history } = this.props;
        return(
            <>
            <AppMenuBar />
            <div className="container pt-3 mt-3">
                {error && (
                    <p className="text-danger">เกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง</p>
                )}
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
                            value={assigneeObj}
                            onChange={this.handleChangeAssignee}
                        >
                        <option value="">ไม่มอบหมายให้ใคร</option>
                        <option value={member.id}>ตนเอง</option>
                        {friends &&
                            friends.map(friend => (
                            <option value={friend.id} key={friend.id}>
                                {friend.fname} {friend.lname}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="deadline">วันครบกำหนด</label>
                        <input
                            type="date"
                            id="deadline"
                            value={task.deadLine}
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
            <Modal isOpen={isModalOpen} toggle={this.toggleModal}>
                <ModalBody>บันทึกข้อมูลสำเร็จ</ModalBody>
                <ModalFooter>
                    <Button onClick={() => history.push('/')} color="primary" type="button">
                        กลับหน้าหลัก
                    </Button>
                </ModalFooter>
            </Modal>
            </>
        );
    }
}

AddTask.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

export default AddTask;