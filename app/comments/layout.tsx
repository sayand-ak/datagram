// components/Layout/CommentsLayout.tsx
import React from 'react';
import { Comment } from '@/app/@types/users';
import styles from './comments.module.css';
import Comments from './page';

interface CommentsLayoutProps {
    comments: Comment[];
}

const CommentsLayout: React.FC<CommentsLayoutProps> = ({ comments }) => {
    return (
        <div className={styles.layout}>
            <main className={styles.main}>
                <Comments />
            </main>
        </div>
    );
};

export default CommentsLayout;