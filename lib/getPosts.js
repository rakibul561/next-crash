export default async function getPosts(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response as JSON
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Failed to fetch post:', error);
        throw error;
    }
}
