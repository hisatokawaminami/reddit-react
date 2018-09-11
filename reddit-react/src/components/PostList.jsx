import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <div>
      {props.PostList.map((post, index)=>
        <Post
          title={post.title}
          imageURL={post.imageURL}
          key={index}
        />
      )}
    </div>
  );
}

PostList.propTypes = {
  PostList: PropTypes.array
};

export default PostList;
