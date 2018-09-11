import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import PostList from './PostList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import PostControl from './PostControl';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }
  handleAddingNewPostToList(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }
  render(){
    return (
      <div>
        <Header />
        <SideBar />

        <Switch>
          <Route exact path='/' render={()=><PostList PostList={this.state.masterPostList}/>} />
          <Route path='/newpost' render={()=><PostControl onNewPost ={this.handleAddingNewPostToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
