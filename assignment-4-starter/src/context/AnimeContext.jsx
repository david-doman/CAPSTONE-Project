import { createContext, useContext } from "react";
import useAnime from "../hooks/useAnime";

const AnimeContext = createContext();

export function AnimeProvider({ children }) {
  const data = useAnime();

  return (
    <AnimeContext.Provider value={data}>
      {children}
    </AnimeContext.Provider>
  );
}

export function useAnimeContext() {
  return useContext(AnimeContext);
}