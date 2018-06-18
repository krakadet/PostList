import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadComment} from '../AC'
import PropTypes from 'prop-types'

class PostDetails extends Component{
    static propTypes = {
        id:PropTypes.number.isRequired,
        userId:PropTypes.number.isRequired,
        loadComment: PropTypes.func.isRequired,
        comments: PropTypes.array.isRequired
    };

    componentDidMount() {
        const {loadComment, id, userId} = this.props;
        loadComment(userId,id)
    }

    render() {
        const {userId, id, data, comments, userName} = this.props;
        const comment = comments;
        let titleBody = data.filter(body => {
            if (body.userId === userId && body.id === id) {
                return body
            }
        });

        return (
            <div>
                {titleBody.map(body =>
                    <ul key={body.id}>
                        <li><h3>Title: {body.title}</h3></li>
                        <li><h3>Author: {userName}</h3></li>
                        <li><h3>Text: {body.body}</h3> </li>
                    </ul>
                )}

                {comment.map(comment =>
                    <ul key={comment.id}>
                        <li>Comment name: {comment.name}</li>
                        <br/>
                        <li>Comment : {comment.body}</li>
                    </ul>
                )}
            </div>
        )

    }
}


export default connect((state => {
    return {
        data: state.posts.data,
        userId: state.userIdentifier.userId,
        id: state.userIdentifier.id,
        comments: state.postDetail.comments,
        userName: state.postDetail.userName.name
    }
}),{loadComment}) (PostDetails)
