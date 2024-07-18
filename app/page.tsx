import { User } from "./@types/users";
import { fetchUsers } from "./api/fetchUserData";
import Navbar from "./components/Navbar/Navbar";

export default async function Home() {
    const users:User[] = await fetchUsers();
    

    return (
        <main className="main">
            <section className="h-[100vh] bg-black">
                <Navbar />
                
                <div className="cardContainer">
                    {
                        users.map((user) => (
                            <div className="card">
                                <h2>{user.name} ({user.username})</h2>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
                                <h3>Address</h3>
                                <p>{user.address.street}, {user.address.suite}</p>
                                <p>{user.address.city}, {user.address.zipcode}</p>
                                <p><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
                                <h3>Company</h3>
                                <p><strong>Name:</strong> {user.company.name}</p>
                                <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
                                <p><strong>BS:</strong> {user.company.bs}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}