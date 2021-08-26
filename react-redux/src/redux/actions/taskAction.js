import axios from "axios"
import * as Types from '../types/types'

export const getTaskDataAction =  () => (dispatch) => {
    axios.get("https://todo-app37.herokuapp.com/loadTodo").then((res) => {
        const data = res.data;
        data.reverse();
        dispatch({ type : Types.ADD_TASKS, payload : data});
    })
}

export const getTaskDetailAction =  (id) => (dispatch) => {
    axios.get(`https://todo-app37.herokuapp.com/singleTodo?id=${id}`).then((res) => {
        dispatch({ type : Types.GET_TASK_DETAIL, payload : res.data});
    })
}

export const storeTaskDataAction =  (taskItem) => (dispatch) => {

    if(taskItem.Title.length == 0){
        alert("Please give a Title ... ");
        return false;
    }
    if(taskItem.Priority.length == 0){
        alert("Please select a Priority ... ");
        return false;
    }

    axios.post("https://todo-app37.herokuapp.com/addTodo", taskItem).then((res) => {
        dispatch(getTaskDataAction());
    })
    .catch((error) => {
        alert(error.message);
    })
}

export const updateTaskDetailAction =  (taskItem, id) => (dispatch) => {

    if(taskItem.Title.length == 0){
        alert("Please give a Title ... ");
        return false;
    }
    if(taskItem.Priority.length == 0){
        alert("Please select a Priority ... ");
        return false;
    }

    axios.patch(`https://todo-app37.herokuapp.com/updateTodo?id=${id}`, taskItem).then((res) => {
        alert("Task Updated");
    })
    .catch((error) => {
        alert(error.message);
    })
}

export const deleteTaskDataAction =  (id) => (dispatch) => {
    axios.delete(`https://todo-app37.herokuapp.com/deleteTodo?id=${id}`).then((res) => {
        dispatch(getTaskDataAction());
    })
    .catch((error) => {
        alert(error.message);
    })
}

export const handleChangeInputTextAction =  (name, value) => (dispatch) => {
    const formData = {
        name,
        value
    }
    dispatch({ type : Types.UPDATE_TASK_FORM, payload : formData });
}