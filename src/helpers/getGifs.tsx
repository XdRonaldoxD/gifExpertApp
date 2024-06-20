import GifImg from "../interfaces/GifGird";

export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NFBsJR68XOpf3uXnnbyhtw60QOYKORtD&q=${encodeURI(categoria)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();//DESUSTRUCTURAMOS
    const gifs = data.map((img: GifImg) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
      }
    })
    return gifs;
  }