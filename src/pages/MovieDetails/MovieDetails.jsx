import { useEffect, useState, useRef, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { baseUrl, optionMovieDetails, baseImgURL } from 'URLs';
import axios from 'axios';

export default function MovieDetails() {
  //states
  const [moveInf, setMoveInf] = useState('');
  const [status, setStatus] = useState('idle');

  //отримуємо параметри URL та locations
  const { movieId } = useParams();
  const location = useRef(useLocation().state?.from ?? '/movies');

  useEffect(() => {
    try {
      axios.get(`${baseUrl}${movieId}${optionMovieDetails}`).then(res => {
        setMoveInf(res);
        setStatus('pending');
      });
    } catch {
      setStatus('error');
    }
  }, [movieId]);

  if (status === 'error') {
    return (
      <>
        <Link to={location.current}>
          <button> {`<`} back</button>
        </Link>
        <h2> Something went wrong </h2>
      </>
    );
  }

  if (status === 'pending') {
    return (
      <>
        <Link to={location.current}>
          <button> {`<`} back</button>
        </Link>

        <div style={{ display: 'flex' }}>
          <>
            <img
              width={220}
              src={`${baseImgURL}${moveInf.data.poster_path}`}
              alt="poster"
            />

            <div>
              <h2>{moveInf.data.title}</h2>
              <p>User Score: {(moveInf.data.vote_average * 10).toFixed()}%</p>
              <p>
                <b>Overview</b>
              </p>
              <p>{moveInf.data.overview}</p>
              <p>
                <b>Genres</b>
              </p>
              <p>{moveInf.data.genres.map(gen => "'" + gen.name + "' ")}</p>
            </div>
          </>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast" movieid={movieId}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" movieid={movieId}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading cast or reviews</div>}>
            <Outlet />
          </Suspense>
        </div>
      </>
    );
  }
}
