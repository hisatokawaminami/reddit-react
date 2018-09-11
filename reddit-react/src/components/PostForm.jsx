import React from 'react';
import PropTypes from 'prop-types';

function PostForm(props){
  let _title = null;
  let _imageURL = null;

  function handlePostFormSubmission(event) {
    event.preventDefault();
    props.onNewPost({title: _title.value, imageURL: _imageURL.value});
    _title.value = '';
    _imageURL.value = '';
  }
  return (
    <div>
      <form onSubmit={handlePostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='imageURL'
          placeholder='Image URL'
          ref={(input) => {_imageURL = input;}}/>
        <button type='submit'>Post</button>

      </form>
    </div>
  );
}

PostForm.propTypes = {
  onNewPost: PropTypes.func
};

export default PostForm;
