import {combineReducers} from 'redux';
import posts from './loadAllPost'
import userIdentifier from './postInfoPage'
import postDetail from './loadDetail'


export default combineReducers({
    posts,
    userIdentifier,
    postDetail


})