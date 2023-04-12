import { useEffect, useState } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';

const KEY_API = `?api_key=85c51028d47d6f3b76fd606d9b7a0314&language=en-US`;
const baseUrl = 'https://api.themoviedb.org/3/movie/';
const urlImg = 'https://image.tmdb.org/t/p/original/';

export default function MovieDetails() {
  const [moveInf, setMoveInf] = useState('');
  const { movieId } = useParams();
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log(backLinkHref);

  useEffect(() => {
    axios.get(`${baseUrl}${movieId}${KEY_API}`).then(res => {
      setMoveInf(res);
      setStatus('pending');
    });
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>
        <button> {`<`} back</button>
      </Link>

      <div style={{ display: 'flex' }}>
        {status === 'idle' ? null : (
          <>
            <img
              width={220}
              src={`${urlImg}${moveInf.data.poster_path}`}
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
        )}
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
      </div>
      <Outlet />
    </>
  );
}
