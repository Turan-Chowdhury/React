import axios from "axios"
import { get_users_failed, get_users_success, users_request } from "../types"

export const userList = () => {

    return async (dispatch) => {
        try {

            dispatch({
                type : users_request
            })

            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(res.data);

            dispatch({
                type : get_users_success,
                payload : res.data
            })

        } catch(error) {
            dispatch({
                type : get_users_failed,
                payload : error.message
            })
        }
    }
}


// export const userList = () => {

//     return (dispatch) => {

//         dispatch({
//             type : users_request
//         })

//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then( res => {

//                 dispatch({
//                     type : get_users_success,
//                     payload : res.data
//                 })
//             })
//             .catch( error => {

//                 dispatch({
//                     type : get_users_failed,
//                     payload : error.message
//                 })
//             })
//     }
// }