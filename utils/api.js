// utils/api.js
const eventsUrl = "http://localhost:4000/events";
const albumsUrl = "http://localhost:4000/albums";
const postsUrl = "http://localhost:4000/posts";

export const fetchData = async () => {
  try {
    // Fetch data using the defined URLs
    const eventsData = await fetch(eventsUrl).then((res) => res.json());
    const albumsData = await fetch(albumsUrl).then((res) => res.json());
    const postsData = await fetch(postsUrl).then((res) => res.json());

    return { eventsData, albumsData, postsData };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { eventsData: null, albumsData: null, postsData: null };
  }
};
