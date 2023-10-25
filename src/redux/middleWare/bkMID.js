
import axios from 'axios'

const url='http://localhost:3333/BK';
export const middlewareBKFunctions = ({ dispatch, getState }) => next => action => {
    // if (action.type == 'ADD_USER') {
    //     debugger
    //     dispatch(setUserName(action.payload.name))
    //     return next(action)
    // }
    if (action.type == 'ADD_BK') {
        debugger
          const put=async()=>{
            await axios.put(`${url}/addUser`)
        }
        put()
    }
    if (action.type == 'GET_ALL_BK') {
        debugger
        const getAll=async()=>{
            debugger
            const allbk=await axios.get('http://localhost:3333/BK/getAllBK')
            action.payload=allbk.data
            return next(action)
        }
        getAll()
    }
    if (action.type == 'DELETE_BK') {
        debugger
          const daleteBk=async()=>{
            await axios.delete(`${url}/deleteBK/${action.payload}`)
        }
        daleteBk()
    }
    

    if (action.type == 'UPDATE_BK') {
        debugger
          const upDate=async()=>{
              debugger
            await axios.post(`${url}/updateTfilot/${action.payload.id}`,action.payload)
        }
        upDate()
    }
    return next(action)
}