import { useEffect, useState } from 'react';
import './FilmList.css';
import Loading from '../../components/Loading/Loading';
import FilmCard from '../../components/FilmCard/FilmCard';

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://ghibliapi.vercel.app/films')
      .then(res => res.json())
      .then(res => {
        setFilms(res);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching films:', error);
        setLoading(false);
      });
  }, []);

  return (
    <main id='films'>
      <div className="film-grid">
      {loading && <Loading />}
        {films.map(film => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </main>
  );
};

export default FilmList;
