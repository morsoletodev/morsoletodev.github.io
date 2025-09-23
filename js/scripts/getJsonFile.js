export default async function getJsonFile() {
    try {
        const response = await fetch('../../assets/json/projectsPTBR.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error loading projects data:", error);
        return [];
    }
}