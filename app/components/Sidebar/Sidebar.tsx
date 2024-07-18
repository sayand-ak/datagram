// Sidebar.tsx
import React from 'react';
import styles from "./Sidebar.module.css";
import { FaDatabase } from "react-icons/fa";
import SidebarItem from '../SidebarItem/SidebarItem';

const Sidebar = () => {
    const sidebarItems = ["Users", "Post", "Comments", "Albums", "Photos"];

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <FaDatabase className='text-[#336AEA]' />
                <p>Datagram</p>
            </div>

            <ul className='flex flex-col gap-8'>
                {sidebarItems.map((item) => (
                    <SidebarItem
                        key={item}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;