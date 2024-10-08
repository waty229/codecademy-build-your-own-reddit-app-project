import React from 'react';
import styles from './Post.module.css';

const Post = ({ post }) => {
  return (
    <li className={styles.post}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.selftext}>{post.selftext}</p>
      <a className={styles.link} href={post.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </li>
  );
};

export default Post;
