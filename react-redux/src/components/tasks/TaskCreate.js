import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { storeTaskDataAction, handleChangeInputTextAction } from '../../redux/actions/taskAction';

export default function TaskCreate(props) {

    const dispatch = useDispatch();
    const taskForm = useSelector(state => state.taskReducer.taskForm)

    const createTask = async (e) => {
      e.preventDefault();
      dispatch(storeTaskDataAction(taskForm));      
    }

    return (
        <>
            <Form onSubmit={(e) => createTask(e)}>
                <h2 className="mt-4 mb-2 text-center">New Task</h2>

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
