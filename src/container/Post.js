import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {PostInfo} from '../AC'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class Post extends Component {

    static  propTypes = {
        data: PropTypes.object.isRequired
    };
    render() {
        const {data} = this.props;
    return (
        <div onClick={this.handlerClick}  className="App-title">
                <NavLink to={`/post/${data.userId +'_'+ data.id}`} >
                    <h3> Title: {data.title}</h3>
                    <h4> text: {data.body}</h4>
                </NavLink>
        </div>
    )
}
    handlerClick = (ev) => {
        ev.preventDefault()
        const {PostInfo} = this.props
        const userId = this.props.data.userId;
        const id = this.props.data.id
        PostInfo(userId,id)
    }
}

export default connect(state => ( {

        state: state.posts.data
    }),{ PostInfo }) (Post)