import {GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS} from '../constans'

const initialState = {
    data: [],
    isLoading: false,
    error: ''

};

export default (posts = initialState, action) => {
    const {type, payload} = action;

        switch (type){
            case GET_DATA_REQUEST:
                return {...posts, isLoading:true  };

            case GET_DATA_SUCCESS:
                return{...posts, data: payload};

            case GET_DATA_FAILURE:
                return{...posts, isLoading: false, error:'something wrong' }

            default:
        }
    return posts
}