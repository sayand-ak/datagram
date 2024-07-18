export const fetchPost = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        return data.slice(0, 10)
    } catch (error) {
        console.error("Error fetching users:", error);
        return ("Failed to load users. Please try again later.");
    }
};
