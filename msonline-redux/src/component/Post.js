import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn red" onClick={this.handleClick}>删除博客</button>
                </div>
            </div>
        ): (
            <div className="container">博客正在加载......</div>
        )

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
      post: state.posts.find(post => post.id === id)
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost:(id) => dispatch(deletePost(id)) 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Post)