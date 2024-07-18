// components/DataPart/DataPart.tsx
'use client'
import { Album, Photo, Post, User, Comment } from "@/app/@types/users";

interface DataDisplayProps {
    data: User[] | Post[] | Comment[] | Album[] | Photo[];
    type: string | undefined;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data, type }) => {
    console.log(data, "___");
    console.log(type, "-----");
    

    const renderContent = (item: any) => {
        switch (type) {
            case 'users':
                return (
                    <div className="card" key={item.id}>
                        <h2>{item.name} ({item.username})</h2>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p><strong>Phone:</strong> {item.phone}</p>
                        <p><strong>Website:</strong> <a href={`http://${item.website}`} target="_blank" rel="noopener noreferrer">{item.website}</a></p>
                        <h3>Address</h3>
                        <p>{item.address.street}, {item.address.suite}</p>
                        <p>{item.address.city}, {item.address.zipcode}</p>
                        <p><strong>Geo:</strong> {item.address.geo.lat}, {item.address.geo.lng}</p>
                        <h3>Company</h3>
                        <p><strong>Name:</strong> {item.company.name}</p>
                        <p><strong>Catch Phrase:</strong> {item.company.catchPhrase}</p>
                        <p><strong>BS:</strong> {item.company.bs}</p>
                    </div>
                );
            case 'posts':
                return (
                    <div className="card" key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                );
            case 'comments':
                return (
                    <div className="card" key={item.id}>
                        <h2>{item.name}</h2>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p>{item.body}</p>
                    </div>
                );
            case 'albums':
                return (
                    <div className="card" key={item.id}>
                        <h2>{item.title}</h2>
                    </div>
                );
            case 'photos':
                return (
                    <div className="card" key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.url} alt={item.title} />
                        <p><strong>Thumbnail:</strong> <img src={item.thumbnailUrl} alt={`${item.title} thumbnail`} /></p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="cardContainer">
            {data.map(renderContent)}
        </div>
    );
};

export default DataDisplay;