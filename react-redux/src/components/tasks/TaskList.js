import React from 'react';
import {Table } from "react-bootstrap";
import TaskDetail from './TaskDetail';

export default function TaskList(props) {

    const {tasks, createMode} = props;

    return (
        <>
            <div className="mt-5 mb-2">
                <div className="float-left">
                    <h2>
                        My Tasks
                        <span className="badge badge-danger ml-2" > {tasks.length} </span>
                    </h2>
                </div>
                <div className="float-right">
                    <button className="btn btn-primary" onClick={createMode} >
                    <i className="fa fa-plus-circle" title="Create Task"></i>
                    </button>
                </div>
                </div>  

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Title</th>                    
                    <th>Priority</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    tasks.map((item, index) => (
                        <TaskDetail key={index} item={item} index={index} />
                    ))
                    }            
                </tbody>
            </Table>
        </>
    )
}
