import { Link } from 'react-router-dom';
import './FilmCard.css';

const FilmCard = ( { film } ) => {
     return (
          <Link to={ `/film/${ film.id }` } key={ film.id } className="film-card">
               <img src={ film.image } alt={ film.title } />
               <div className='details-container'>
                    <h3>{ film.title }</h3>
                    <p><strong>Director:</strong> { film.director }</p>
                    <p><strong>Release Date:</strong> { film.release_date }</p>
               </div>
          </Link>
     );
};

export default FilmCard;