import { useState, useEffect, Suspense, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
const MovieItems = lazy(() => import('../../components/MovieItems'));

export default function SearchMovie() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  let name = searchParams.get('name') ?? '';

  useEffect(() => {
    console.log(searchQuery);
    if (name !== '') {
      setSearchQuery(name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Suspense fallback={<div>Loading...</div>}>
        {searchQuery ? (
          <MovieItems searchQuery={searchQuery} search={searchParams} />
        ) : null}
      </Suspense>
    </>
  );
}
