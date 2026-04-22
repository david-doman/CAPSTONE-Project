import { useState, useEffect } from "react";

const STORAGE_KEY = "anime_app_data";

export default function useAnime() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setAnimeList(data);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(animeList));
  }, [animeList]);

  const addAnime = (anime) => {
    setAnimeList([...animeList, { ...anime, id: Date.now().toString() }]);
  };

  const updateAnime = (updated) => {
    setAnimeList(animeList.map(a => a.id === updated.id ? updated : a));
  };

  const deleteAnime = (id) => {
    setAnimeList(animeList.filter(a => a.id !== id));
  };

  const getAnime = (id) => {
    return animeList.find(a => a.id === id);
  };

  return {
    animeList,
    addAnime,
    updateAnime,
    deleteAnime,
    getAnime
  };
}