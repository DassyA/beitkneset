
import axios from 'axios'

const url='http://localhost:3333/USER';

export const middlewareUserFunctions = ({ dispatch, getState }) => next => action => {

    if (action.type == 'GET_ALL_USER') {
        debugger
        const getAll=async()=>{
            debugger
            const u=await axios.get(`${url}/getAllUsers`)
            action.payload=u.data
            return next(action)
        }
        getAll()
    }
    if (action.type == 'ADD_USER') {
        debugger
        const addUser=async()=>{
            debugger
            const u=await axios.get(`${url}/addUser`,action.payload)
            action.payload=u.data
            return next(action)
        }
        addUser()
    }
    return next(action)
}