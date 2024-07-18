// components/Layout/PostsLayout.tsx
import React from 'react';
import styles from './post.module.css';
import Posts from './page';

const PostsLayout= () => {
    return (
        <div className={styles.layout}>
            <main className={styles.main}>
                <Posts />
            </main>
        </div>
    );
};

export default PostsLayout;