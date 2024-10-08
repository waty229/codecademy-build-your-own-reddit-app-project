import React from 'react';
import Post from './post';
import styles from './Postlist.module.css';

const PostList = ({ posts }) => {
  return (
    <ul className={styles.postList}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
