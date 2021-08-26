import React, { useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTaskDetailAction, handleChangeInputTextAction, updateTaskDetailAction } from '../../redux/actions/taskAction';

export default function TaskEdit(props) {

    const dispatch = useDispatch();
    const taskForm = useSelector(state => state.taskReducer.taskForm)

    const params = useParams();
    const {id} = params;

    useEffect(() => {
        dispatch(getTaskDetailAction(id));
    }, [])

    const updateTask = async (e) => {
      e.preventDefault();
      dispatch(updateTaskDetailAction(taskForm, id));      
    }

    return (
        <>
            <Form onSubmit={(e) => updateTask(e)}>
                <h2 className="mt-4 mb-2 text-center">Edit Task</h2>

                <Form.Group controlId="title">
                  <Form.Control type="text" placeholder="Enter Title" name="Title" value={taskForm.Title} onChange={(e) => dispatch( handleChangeInputTextAction(e.target.name, e.target.value) )}/>
                </Form.Group>

                <Form.Group controlId="priority">
                  <Form.Control as="select" name="Priority" value={taskForm.Priority} onChange={(e) => dispatch( handleChangeInputTextAction(e.target.name, e.target.value) )}>
                  <option value={''}>Select Task Priority</option>
                    <option value={'Low'}>Low</option>
                    <option value={'High'}>High</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="success" type="submit">
                  Submit
                </Button>
            </Form> <br/>
        </>
    )
}
