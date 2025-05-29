
const dataUrl = 'assets/data.json';

export const getData = async () => {
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        return data.boards;

    } catch (err) {
        console.error('Failed to fetch datat', err);
        return [];
    }
}

