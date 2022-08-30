import React from 'react'
import PropTypes from 'prop-types'


PostList.propTypes = {
    posts: PropTypes.array
}

PostList.defaultProps = {
    posts: []
}


function PostList(props) {
    const {posts} = props;
  return (
    <ul className="post-list">
        {posts.map(posts => (
            <li key={posts.id}>
                {posts.title}
            </li>
        ))}
    </ul>
  )
}


export default PostList
