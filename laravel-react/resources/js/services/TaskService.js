import axios from "axios";

export const getTasktList = () => {}

export const storeNewTask= async (data) => {
    data.project_id = parseInt(data.project_id);
    return await axios.post("http://localhost/laravel-react/api/tasks", data).then( (res) => {
        return res.data;
    })
}

export const updateTask = async (id, data) => {

    return await axios.put(`http://localhost/laravel-react/api/tasks/${id}`, data).then( (res) => {
        return res.data;
    })
}

export const deleteTask = async (id) => {

    return await axios.delete(`http://localhost/laravel-react/api/tasks/${id}`).then( (res) => {
        return res.data;
    })
}