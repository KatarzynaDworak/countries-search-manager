const URL = 'https://restcountries.com/v3.1/all';

const getCountries = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data; 
    } catch (error) {
        console.error(error);
    } finally {
        console.log('Pobieranie listy krajów ukończone');
    }
};

export { getCountries };

