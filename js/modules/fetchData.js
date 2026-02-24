/**
 * Fetches data from a JSON file.
 * @param {string} path - The path to the JSON file.
 * @returns {Promise<any>} - The parsed JSON data.
 */
export async function fetchData(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Could not fetch data from ${path}:`, error);
        return null;
    }
}
