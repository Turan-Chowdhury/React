import React from 'react'

export default function TaskSingle(props) {
    const task = props.task;
    const index = props.index;
    return (
        
        <tr>
            <td>{index + 1}</td>
            <td>{task.title}</td>
            <td onClick={() => props.changeTaskStatus(index)}>{task.status}</td>
        </tr>

    )
}
