import { useState, useEffect, Suspense, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
const MovieItems = lazy(() => import('components/MovieItems'));

export default function SearchMovie() {
  //state рядок який відправлятимемо для рендеру списка фільмів
  const [searchMovieString, setSearchMovieString] = useState('');
  // URL параметр хук
  const [searchParams, setSearchParams] = useSearchParams();
  // якщо параметр name порожній записуємо пустий рядок
  const nameValue = searchParams.get('name') ?? '';

  useEffect(() => {
    // при першому рендері якщо параметр name в URL відсутній
    if (nameValue === '') {
      return;
    }
    // записуємо в setSearchMovieString поточний параметр name і рендеримо список фільмів
    setSearchMovieString(nameValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // змінюємо параметр URL при вводі в input
  const setParamsName = e => {
    setSearchParams({ name: e.target.value });
  };

  // при сабміті записуємо в setSearchMovieString поточний параметр name і рендеримо список фільмів
  const onSubmitClick = e => {
    e.preventDefault();
    setSearchMovieString(nameValue);
  };

  return (
    <>
      <form onSubmit={onSubmitClick}>
        <button type="submit"> Search movie</button>
        <input type="text" value={nameValue} onChange={setParamsName} />
      </form>
      <Suspense fallback={<div>Loading...</div>}>
        {searchMovieString ? (
          <MovieItems searchQuery={searchMovieString} />
        ) : null}
      </Suspense>
    </>
  );
}
