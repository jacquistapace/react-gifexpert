export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=j7MGnIuBOh9HdphwRAVhPmv3W9qadZEV&q=${category}&limit=10`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log("🚀 ~ file: getGifs.js:12 ~ gifs ~ gifs:", gifs)

  return gifs;
};
