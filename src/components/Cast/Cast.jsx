import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = `https://api.themoviedb.org/3/movie/`;
const API_KEY = '85c51028d47d6f3b76fd606d9b7a0314';
const optionURL = `/credits?api_key=${API_KEY}&language=en-US`;
const baseImgURL = `https://image.tmdb.org/t/p/original`;

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    axios.get(`${baseUrl}${movieId}${optionURL}`).then(res => {
      setActors(res.data.cast);
      setStatus('pending');
    });
  }, []);

  if (status === 'idle') {
    return;
  } else {
    return (
      <ul>
        {actors.map(({ id, profile_path, character, name }) => (
          <li key={id}>
            <img width={120} src={`${baseImgURL}${profile_path}`} alt="" />
            <p>Character: {character}</p>
            <p>Name: {name}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Cast;
