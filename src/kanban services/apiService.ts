
const dataUrl = 'assets/data.json';

export const getData = async () => {
    try {
        const data = await fetch(dataUrl);
        const response = await data.json();

        console.log(response);
    } catch (err) {
        // console.error(err)
    }
}

