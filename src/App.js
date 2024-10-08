import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './components/posts/postsSlice';
import PostList from './components/posts/PostList';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts('popular'));
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = <div className={styles.loading}>Loading...</div>;
  } else if (postStatus === 'succeeded') {
    content = <PostList posts={posts} />;
  } else if (postStatus === 'failed') {
    content = <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Reddit Posts</h1>
      {content}
    </div>
  );
}

export default App;
