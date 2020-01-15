import React, {Component} from 'react';
import {connect} from 'react-redux'
import Timer from './Timer/TimerContainer';
import StepSelector from './StepSelector/StepSelector';
import * as postsActions from '../redux/posts/postsActions';
import posts from '../posts.json';
import PostsList from './PostList/PostListContainer';
import TagFilter  from "./TagFilter/TagFilter";


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts(posts)
  }

  render() {
     return (
      <div style={containerStyle}>
        <Timer/>
        <StepSelector/>
        <hr style={{width: '100%'}}/>
        <TagFilter />
        <PostsList />
      </div>
    )
  }
}

const mDTP = (dispatch) => ({
  fetchPosts: (posts) => dispatch(postsActions.fetchPosts(posts))
});

export default connect(null, mDTP)(App);