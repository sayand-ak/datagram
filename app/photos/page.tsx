// components/Photos/Photos.tsx
import React from 'react';
import { Photo } from '@/app/@types/users';
import styles from './photos.module.css';
import { fetchPhotos } from '../api/fetchPhotoData';
import Navbar from '../components/Navbar/Navbar';


const Photos = async() => {
    const photos:Photo[] = await fetchPhotos();

  return (
    <>
        <Navbar/>
        <div className={styles.layout}>
            <div className={styles.photosContainer}>
                {photos.map((photo) => (
                <div key={photo.id} className={styles.photoCard}>
                    <img src={photo.thumbnailUrl} alt={photo.title} className={styles.photoImage} />
                    <h2 className={styles.photoTitle}>{photo.title}</h2>
                    <p className={styles.photoMeta}>
                    Album ID: {photo.albumId} | Photo ID: {photo.id}
                    </p>
                    <a href={photo.url} target="_blank" rel="noopener noreferrer" className={styles.photoLink}>
                    View Full Size
                    </a>
                </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default Photos;