import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { URLFromMovieItems } from 'URLs';
import axios from 'axios';

export default function MovieItems({ searchQuery }) {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  //записуємо у змінну поточний URL
  const location = useLocation();

  useEffect(() => {
    // робимо запит на сервер кожен раз коли змінюється проп searchQuery
    try {
      axios.get(`${URLFromMovieItems}${searchQuery}`).then(res => {
        setMovies(res.data.results);
        setStatus('pending');
      });
    } catch {
      alert('Unknown error, please reset page');
      setStatus('error');
    }
  }, [searchQuery]);
  //якщо зловили помилку рендерим:
  if (status === 'error') {
    return;
  }
  //якщо все добре рендерим:
  if (status === 'pending') {
    return movies.length === 0 ? (
      <h1>Nothing found</h1>
    ) : (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
