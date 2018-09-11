import React from 'react';
import PropTypes from 'prop-types';
import PostForm from './PostForm';
import Confirmation from './Confirmation';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }
  handleConfirmation(){
    this.setState({formVisible: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisible){
      currentlyVisibleContent = <PostForm onNewPost={this.props.onNewPost}/>;
    } else {
      currentlyVisibleContent = <Confirmation onConfirmation={this.handleConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

PostControl.propTypes = {
  onNewPost: PropTypes.func
};

export default PostControl;
