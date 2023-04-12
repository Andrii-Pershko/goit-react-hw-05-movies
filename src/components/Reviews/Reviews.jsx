import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = `https://api.themoviedb.org/3/movie/`;
const API_KEY = '85c51028d47d6f3b76fd606d9b7a0314';
const optionURL = `/reviews?api_key=${API_KEY}&language=en-US&page=1`;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    axios.get(`${baseUrl}${movieId}${optionURL}`).then(res => {
      setReviews(res.data.results);
      console.log(res.data.results);
      setStatus('pending');
    });
  }, []);

  if (status === 'idle') {
    return;
  } else {
    if (reviews.length === 0) {
      return <h2> Not reviews </h2>;
    } else {
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
