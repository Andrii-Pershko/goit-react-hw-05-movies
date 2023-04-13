import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '85c51028d47d6f3b76fd606d9b7a0314';
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;

export default function MovieItems({ searchQuery }) {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    axios
      .get(`${URL}&query=${searchQuery}`)
      .then(res => setMovies(res.data.results));
  }, [searchQuery]);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
