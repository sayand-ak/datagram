// components/Comments/Comments.tsx
import React from 'react';
import { Comment } from '@/app/@types/users';
import styles from './comments.module.css';
import { fetchComments } from '../api/fetchCommentData';
import Navbar from '../components/Navbar/Navbar';


const Comments = async() => {
    const comments: Comment[] = await fetchComments()
    return (
        <>
            <Navbar/>
            <div className={styles.commentsContainer}>
                {comments.map((comment) => (
                    <div key={comment.id} className={styles.commentCard}>
                        <div className={styles.commentHeader}>
                            <h2 className={styles.commentName}>{comment.name}</h2>
                        </div>
                        <p className={styles.commentEmail}><strong>Email:</strong> {comment.email}</p>
                        <p className={styles.commentBody}><strong>Body:</strong> {comment.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Comments;