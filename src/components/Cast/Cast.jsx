import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl, optionURLFromCast, baseImgURL } from '../../URLs/urls';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();


  useEffect(() => {
    //лише при першому рендеру робимо запит на сервер
    try {
      axios.get(`${baseUrl}${movieId}${optionURLFromCast}`).then(res => {
        setActors(res.data.cast);
        setStatus('pending');
      });
    } catch {
      alert('Unknown error, please reset page');
      setStatus('error');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //якщо зловили помилку рендерим:
  if (status === 'error') {
    return <h1>Unknown error, please reset page</h1>;
  }
  // якщо все добре рендерим:
  if (status === 'pending') {
    return (
      <ul>
        {/* робимо map по масиву та рендерим: */}
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
