// components/Layout/PostsLayout.tsx
import React from 'react';
import styles from './photos.module.css';
import Photos from './page';

const PostsLayout= () => {
    return (
        <div className={styles.layout}>
            <main className={styles.main}>
                <Photos />
            </main>
        </div>
    );
};

export default PostsLayout;