import { useState } from "react";
import { useAnimeContext } from "../context/AnimeContext";
import AnimeCard from "../components/AnimeCard";

export default function List() {
  const { animeList } = useAnimeContext();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = animeList.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? a.category === category : true)
  );

  return (
    <div>
      <h2>Anime List</h2>

      <div className="mb-3">
        <input
          className="form-control mb-2"
          placeholder="Search..."
          onChange={e => setSearch(e.target.value)}
        />

        <select
          className="form-select"
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option>Action</option>
          <option>Romance</option>
          <option>Comedy</option>
          <option>Drama</option>
        </select>
      </div>

      {animeList.length === 0 ? (
        <p>No anime added yet.</p>
      ) : filtered.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="row g-3">
          {filtered.map(a => (
            <AnimeCard key={a.id} anime={a} />
          ))}
        </div>
      )}
    </div>
  );
}