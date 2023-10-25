import {combineReducers,applyMiddleware,createStore} from 'redux'
import { middlewareBKFunctions } from './middleWare/bkMID'
import { middlewareUserFunctions } from './middleWare/userMID'
import BKreducer from './reducers/BKlistREDUCER'
import userREDUCERSJS from './reducers/userREDUCERS'

const MYreducer=combineReducers({BKreducer,userREDUCERSJS})
const MYmiddleware=applyMiddleware(middlewareBKFunctions,middlewareUserFunctions)
const store=createStore(MYreducer,MYmiddleware)
window.store=store;
export default store;

