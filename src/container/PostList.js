import React, { PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Post from './Post'
import {loadAllPost} from "../AC";

class PostList extends PureComponent {
    static propTypes = {
        loadAllPost: PropTypes.func.isRequired,
        data: PropTypes.array.isRequired,
        isLoading:PropTypes.bool
    };

    componentDidMount(){
        const {loadAllPost} = this.props;
        loadAllPost()
    }

    render() {
        const {data, isLoading} = this.props;
        return (
            <div>
                <ul>
                    { !isLoading ? 'Loading' :
                    data.map((post, index) => {
                        return <li key={index}><Post data = {post}/></li>
                    })}
                </ul>
            </div>
        )

    }
}

export default connect((state => {
    return {
        data: state.posts.data,
        isLoading: state.posts.isLoading,
        error: state.posts.error
    }
}),{loadAllPost}) (PostList)