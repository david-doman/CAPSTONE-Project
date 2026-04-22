import { useParams, useNavigate } from "react-router-dom";
import { useAnimeContext } from "../context/AnimeContext";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getAnime } = useAnimeContext();

  const anime = getAnime(id);

  if (!anime) {
    return <div className="alert alert-warning">Anime not found</div>;
  }

  return (
    <div className="card">
      <div className="card-body">

        <h3>{anime.title}</h3>

        <p><strong>Episodes:</strong> {anime.episodes}</p>
        <p><strong>Rating:</strong> {anime.rating}</p>

        <span className="badge text-bg-secondary">
          {anime.category}
        </span>

        <div className="mt-3">
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>

      </div>
    </div>
  );
}