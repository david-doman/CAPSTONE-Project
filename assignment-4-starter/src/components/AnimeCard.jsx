import { Link } from "react-router-dom";
import { useAnimeContext } from "../context/AnimeContext";

export default function AnimeCard({ anime }) {
  const { deleteAnime } = useAnimeContext();

  const handleDelete = () => {
    if (window.confirm("Delete this anime?")) {
      deleteAnime(anime.id);
    }
  };

  return (
    <div className="col-sm-6 col-lg-4">
      <div className="card h-100">

        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/item/${anime.id}`}>{anime.title}</Link>
          </h5>

          <p><strong>Episodes:</strong> {anime.episodes}</p>

          <span className="badge text-bg-secondary">
            {anime.category}
          </span>
        </div>

        <div className="card-footer d-flex justify-content-between">

          <Link
            className="btn btn-sm btn-outline-primary"
            to={`/edit/${anime.id}`}
          >
            Edit
          </Link>

          <Link
            className="btn btn-sm btn-outline-secondary"
            to={`/item/${anime.id}`}
          >
            Details
          </Link>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={handleDelete}
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}