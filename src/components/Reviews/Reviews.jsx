import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseUrl, optionURLfromReviews } from 'URLs';
import axios from 'axios';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    try {
      axios.get(`${baseUrl}${movieId}${optionURLfromReviews}`).then(res => {
        setReviews(res.data.results);
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
  //якщо все добре рендерим:
  if (status === 'pending') {
    //якщо відсутні рецензії повідовляємо про це
    if (reviews.length === 0) {
      return <h2> Not reviews </h2>;
    }
    //в іншому випадку рендеримо рецензії
    else {
      return (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Authot: {author}</b>
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      );
    }
  }
}

//
