import axios from "axios";

export const getProjectList = async () => {
    return await axios.get("http://localhost/laravel-react/api/projects").then( (res) => {
            return res.data.data;
        })
}

export const storeNewProject = async (data) => {
    data.user_id = 1;

    return await axios.post("http://localhost/laravel-react/api/projects", data).then( (res) => {
        return res.data;
    })
}

export const updateProject = async (id, data) => {
    data.user_id = 1;

    return await axios.put(`http://localhost/laravel-react/api/projects/${id}`, data).then( (res) => {
        return res.data;
    })
}

export const deleteProject = async (id) => {

    return await axios.delete(`http://localhost/laravel-react/api/projects/${id}`).then( (res) => {
        return res.data;
    })
}