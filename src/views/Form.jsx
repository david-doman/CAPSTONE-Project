import { useState, useEffect } from "react";
import { useAnimeContext } from "../context/AnimeContext";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
  const { addAnime, updateAnime, getAnime } = useAnimeContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [anime, setAnime] = useState({
    title: "",
    category: "",
    rating: "",
    episodes: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      const existing = getAnime(id);
      if (existing) setAnime(existing);
    }
  }, [id]);

  const validate = () => {
    let err = {};

    if (!anime.title.trim()) err.title = "Required";
    if (!anime.category) err.category = "Required";

    if (anime.rating === "" || isNaN(anime.rating))
      err.rating = "Valid rating required";
    else if (anime.rating < 0 || anime.rating > 5)
      err.rating = "0–5 only";

    if (anime.episodes === "" || isNaN(anime.episodes))
      err.episodes = "Valid episodes required";
    else if (anime.episodes <= 0)
      err.episodes = "Must be > 0";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    id ? updateAnime(anime) : addAnime(anime);

    alert("Saved successfully!");
    navigate("/list");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Anime" : "Add Anime"}</h2>

      <input
        className="form-control mb-2"
        placeholder="Title"
        value={anime.title}
        onChange={e => setAnime({ ...anime, title: e.target.value })}
      />
      {errors.title && <div className="text-danger">{errors.title}</div>}

      <select
        className="form-select mb-2"
        value={anime.category}
        onChange={e => setAnime({ ...anime, category: e.target.value })}
      >
        <option value="">Select category</option>
        <option>Action</option>
        <option>Romance</option>
        <option>Comedy</option>
        <option>Drama</option>
      </select>
      {errors.category && <div className="text-danger">{errors.category}</div>}

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Rating (0–5)"
        value={anime.rating}
        onChange={e => setAnime({ ...anime, rating: e.target.value })}
      />
      {errors.rating && <div className="text-danger">{errors.rating}</div>}

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Episodes"
        value={anime.episodes}
        onChange={e => setAnime({ ...anime, episodes: e.target.value })}
      />
      {errors.episodes && <div className="text-danger">{errors.episodes}</div>}

      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={anime.description}
        onChange={e => setAnime({ ...anime, description: e.target.value })}
      />

      <button className="btn btn-primary">Save</button>
    </form>
  );
}