import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { optionalFromTrendings } from 'URLs';
import axios from 'axios';

export default function Trendings() {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      axios
        .get(`${optionalFromTrendings}`)
        .then(dataMovies => setMovieList(dataMovies.data.results));
    } catch {
      alert('Unknown error');
    }
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      <ul className="movieList">
        {movieList.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
