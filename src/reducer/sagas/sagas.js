import { takeEvery } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects'
import axios from 'axios'

export function* createPostAsync () {
    try {
        const data = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts`, );
        const post = data.data;
        yield put ({type:'GET_DATA_SUCCESS', payload : post})
    } catch (e) {
        yield put ({type:'GET_DATA_FAILURE'})
    }
}

export function* createCommentAsync (action) {
    try {
        const comment = yield call(axios.get, `https://jsonplaceholder.typicode.com/comments?postId=${action.payload}`, );
        const person = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${action.userId}`, );
        const personName = person.data;
        const commentAll = comment.data;
        yield put ({type: 'GET_COMMENT_SUCCESS', payload: commentAll, userName: personName})

    } catch (e) {
        yield put ({type:'GET_COMMENT_FAILURE'})
    }

}


export default function* rootSaga() {
    yield takeEvery('GET_COMMENT_REQUEST', createCommentAsync)
    yield takeEvery('GET_DATA_REQUEST', createPostAsync)
}