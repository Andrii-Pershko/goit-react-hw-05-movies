import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '85c51028d47d6f3b76fd606d9b7a0314';
const baseURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

export default function Trendings() {
  const [movieList, setMovieList] = useState([]);

  const location = useLocation();


  useEffect(() => {
    try {
      axios
        .get(baseURL)
        .then(dataMovies => setMovieList(dataMovies.data.results));
    } catch {}
  }, []);

  return (
    <ul className="movieList">
      {movieList.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
