// components/Albums/Albums.tsx
import React from 'react';
import { Album } from '@/app/@types/users';
import styles from './albums.module.css';
import { fetchAlbum } from '../api/fetchAlbumData';
import Navbar from '../components/Navbar/Navbar';


const Albums = async() => {
    const albums: Album[] = await fetchAlbum();
    return (
        <>
            <Navbar/>

            <div className={styles.albumsContainer}>
                {albums.map((album) => (
                    <div key={album.id} className={styles.albumCard}>
                        <div className={styles.albumImagePlaceholder}>
                            <span>{album.id}</span>
                        </div>
                        <h2 className={styles.albumTitle}>{album.title}</h2>
                        <p className={styles.albumUser}>User ID: {album.userId}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Albums;