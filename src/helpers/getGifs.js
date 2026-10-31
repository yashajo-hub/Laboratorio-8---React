export const getGifs = async (category) => {
    const limit = 10;
    const apiKey = "Ie2nhe1oxoZR7PdEAy5RrMrfwqhv5kdv";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;


    const respuesta = await fetch(url);

    const { data = [] } = await respuesta.json();

    const gifsNuevas = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url,
        };
    });

    return gifsNuevas;
};