// components/Layout/AlbumsLayout.tsx
import React from 'react';
import { Album } from '@/app/@types/users';
import styles from './albums.module.css';
import Albums from './page';


const AlbumsLayout= () => {
  return (
    <div className={styles.layout}>
        <main className={styles.main}>
            <Albums />
        </main>
    </div>
  );
};

export default AlbumsLayout;