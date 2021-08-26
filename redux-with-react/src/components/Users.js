import React , {useEffect} from 'react'
import { connect } from 'react-redux';
import { userList } from '../services/actions/userAction'

const Users = ({ userList, loading, users, error }) => {

    useEffect(() => {
        userList()
    }, []);

    return (
        <div>
            {
                loading? <h3>Loading ... </h3> : error? <h3> {error} </h3> : (
                    <div>
                        {
                            users.map( (user, index) => (
                                <h5 key={index} > {user.title} </h5>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading : state.userReducer.loading,
    users : state.userReducer.users,
    error : state.userReducer.error
})

export default connect(mapStateToProps, { userList} ) (Users)
