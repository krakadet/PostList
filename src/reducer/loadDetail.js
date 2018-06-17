import {
    GET_COMMENT_FAILURE, GET_COMMENT_REQUEST,GET_COMMENT_SUCCESS
} from "../constans";
const postDetailDefault = {
    comments: [],
    userName: '',
    error: ''

};

export default (postDetail = postDetailDefault, action) => {
    const {type, payload, userName} = action;

        switch (type){
            case GET_COMMENT_REQUEST:
                return{...postDetail, };

            case GET_COMMENT_SUCCESS:
                return{...postDetail, comments:payload, userName: userName  };

            case GET_COMMENT_FAILURE:
                return{...postDetail,  error:'something wrong with comments' }

            default:
        }
    return postDetail
}