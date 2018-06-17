import {GET_COMMENT_REQUEST, POST_INFO_PAGE,GET_DATA_REQUEST} from '../constans'

export function PostInfo (userId,id) {
    return {
        type : POST_INFO_PAGE,
        id : id,
        userId: userId
    }
}

export function loadComment (userId,id) {
    return {
        type: GET_COMMENT_REQUEST,
        payload: id,
        userId: userId,
        userName: ''
    }
}

export function loadAllPost (data) {
    return {
        type: GET_DATA_REQUEST,
        isLoading: true
    }
}