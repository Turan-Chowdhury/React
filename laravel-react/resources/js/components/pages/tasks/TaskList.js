import React, { Component } from 'react'
import { Card, Button, Badge, Spinner } from 'react-bootstrap'
import { updateTask, deleteTask } from '../../../services/TaskService'

export default class TaskList extends Component {

    toggleStatus = async (task) => {

        task.status === 0? (task.status = 1) : (task.status = 0) ;
        
        const response = await updateTask(task.id, task);

        this.props.onEditTask();
    }

    deleteTask = async (id) => {
        const response = await deleteTask(id);

        if(response.success){
            this.props.onEditTask();
        }else{
            alert("Sorry !! Something went wrong !!")
        }
    }

    render() {
        return (
            <>
                {
                    this.props.taskList.map((task, index) => (
                        <Card key={index} className='mt-3'>                           
                            <Card.Body>
                                <div className='float-left'>
                                    <p>
                                        {
                                            task.status === 1 && (
                                                <del className="text-success">
                                                    <strong>
                                                        {task.name}  <Badge variant="primary" className='ml-1'>{task.tasks_count}</Badge>
                                                    </strong>
                                                </del>
                                            )
                                        }
                                        {
                                            task.status === 0 && (
                                                <span className="text-success">
                                                    <strong>
                                                        {task.name}  <Badge variant="primary" className='ml-1'>{task.tasks_count}</Badge>
                                                    </strong>
                                                </span>
                                            )
                                        }
                                    </p>
                                    <Card.Text>
                                        {task.description}
                                    </Card.Text>
                                </div>
                                <div className='float-right'>
                                        <button className={`btn btn-outline-${task.status === 0? "success" : "info"} btn-sm mr-2`} onClick={ () => this.toggleStatus(task) }> 
                                            { task.status === 0? "✔ Mark As Completed" : "Mark As Pending" }
                                        </button>
                                        <button className="btn btn-outline-danger btn-sm mr-2" onClick={ () => this.deleteTask(task.id) }> Delete </button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                }
            </>
        )
    }
}
