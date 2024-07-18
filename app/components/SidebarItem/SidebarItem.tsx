// components/SidebarItem/SidebarItem.tsx
'use client'
import React from 'react';
import { IconType } from 'react-icons';
import style from "./SidebarItem.module.css";
import { FaUsers } from "react-icons/fa";
import { RiSignpostFill } from "react-icons/ri";
import { BiSolidPhotoAlbum, BiSolidComment } from "react-icons/bi";
import { MdInsertPhoto } from "react-icons/md";

interface SidebarItemProps {
    item: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
    
    const getIcon = (item: string): IconType => {
        switch (item.toLowerCase()) {
            case 'Users':
                return FaUsers;
            case 'Post':
                return RiSignpostFill;
            case 'Comments':
                return BiSolidComment;
            case 'Albums':
                return BiSolidPhotoAlbum;
            case 'Photos':
                return MdInsertPhoto;
            default:
                return FaUsers;
        }
    };

    const Icon = getIcon(item);

    


    return (
        <div 
            className={`${style.sidebarItem}`}
            onClick={() => {
                item == "Users" ? window.location.href = "/": null;
                item == "Post" ? window.location.href = "/posts": null;
                item == "Comments" ? window.location.href = "/comments": null;
                item == "Albums" ? window.location.href = "/albums": null;
                item == "Photos" ? window.location.href = "/photos": null;
            }}
        >
            <Icon className={`${style.sidebarIcon} text-[25px]`} />
            <p className={`${style.sidebarText} text-[16px] font-semibold`}>{item}</p>
        </div>
    );
};

export default SidebarItem;