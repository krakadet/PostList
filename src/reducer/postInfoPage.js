import {POST_INFO_PAGE} from "../constans";

const defaultName = {
     userId : '',
     id: ''
};

export default (userIdentifier = defaultName, action) =>{
    const {type, userId, id} = action;

        switch (type){
            case POST_INFO_PAGE:
                return{...userIdentifier, userId: userId, id: id};
            default:
        }
    return userIdentifier
}
