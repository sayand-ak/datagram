export const fetchPhotos = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        if (!response.ok) {
            throw new Error('Failed to fetch photos');
        }
        const data = await response.json();
        return data.slice(0, 10)
    } catch (error) {
        console.error("Error fetching users:", error);
        return ("Failed to load users. Please try again later.");
    }
};
