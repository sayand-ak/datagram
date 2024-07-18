// components/Posts/Posts.tsx
import React from 'react';
import { Post } from '@/app/@types/users';
import styles from './post.module.css';
import { fetchPost } from '../api/fetchPostData';
import Navbar from '../components/Navbar/Navbar';

const Posts = async () => {
    const posts: Post[] = await fetchPost();
    return (
        <>
            <Navbar />
            <div className={styles.postsContainer}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.postCard}>
                        <h2 className={styles.postTitle}>{post.title}</h2>
                        <p className={styles.postBody}>{post.body}</p>
                        <p className={styles.postMeta}>Post ID: {post.id} | User ID: {post.userId}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Posts;
