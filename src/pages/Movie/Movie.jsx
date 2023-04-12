import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieItems from '../../components/MovieItems';

export default function SearchMovie() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name') ?? '';

  useEffect(() => {
    setSearchQuery('');
    if (name !== '') {
      setSearchQuery(name);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);

    if (name.trim() === '') {
      alert('The string must not be empty');
      return;
    }
    setSearchQuery(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit"> Search movie</button>
        <input
          type="text"
          value={name}
          onChange={e => setSearchParams({ name: e.target.value })}
        />
      </form>

      {searchQuery ? (
        <MovieItems searchQuery={searchQuery} search={searchParams} />
      ) : null}
    </>
  );
}
