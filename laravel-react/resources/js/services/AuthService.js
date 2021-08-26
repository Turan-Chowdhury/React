import axios from "axios";

export const checkIfAuthenticated = () => {
    const getLoginData = localStorage.getItem("loginData");

    if(getLoginData !== null){
        const data = JSON.parse(getLoginData);
        if(data.success && data.access_token !==null){
            return data.user;
        }
        return false;
    }
    return false;
}

export const registerUser = async (data) => {

    return await axios.post("http://localhost/laravel-react/api/auth/register", data).then( (res) => {
        return res.data;
    })
}

export const loginUser = async (data) => {

    return await axios.post("http://localhost/laravel-react/api/auth/login", data).then( (res) => {
        return res.data;
    })
}
