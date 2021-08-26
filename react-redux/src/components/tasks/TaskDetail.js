import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTaskDataAction } from '../../redux/actions/taskAction';

export default function TaskDetail(props) {

    const dispatch = useDispatch();

    const {item, index} = props;

    return (
        <tr>
            <td>{index+1}</td>
            <td>{item._id}</td>
            <td>{item.Title}</td>
            <td>{item.Priority}</td>
            <td>
                <Link to={`/edit/${item._id}`} > 
                    <i className="fa fa-edit text-success pointer" title="Edit Task"></i> 
                </Link>                
                <i className="fa fa-trash text-danger ml-3 pointer" title="Delete Task" onClick={() => dispatch(deleteTaskDataAction(item._id))} ></i>
            </td>
        </tr>
    )
}
