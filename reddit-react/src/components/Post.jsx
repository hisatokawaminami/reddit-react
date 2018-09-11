import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


function Post(props) {
  return (
    <div className = 'container' >


      <h3>{props.title}</h3>
      <img src={props.imageURL}/>

    </div>

  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string
};
export default Post;
