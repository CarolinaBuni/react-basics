import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FilmDetail.css';
import Loading from '../../components/Loading/Loading';
import FilmInfo from '../../components/FilmInfo/FilmInfo'

const FilmDetail = () => {
  const { id } = useParams();
  const [ film, setFilm ] = useState( null );
  const [ loading, setLoading ] = useState( true );

  useEffect( () => {
    fetch( `https://ghibliapi.vercel.app/films/${ id }` )
      .then( res => res.json() )
      .then( data => {
        setFilm( data );
        setLoading( false ); 
      } )
      .catch( error => {
        console.error( 'Error fetching film details:', error );
        setLoading( false ); 
      } );
  }, [ id ] );

  if ( loading ) {
    return <Loading />;
  }

  return (
    <div className="film-detail">
      <FilmInfo film={ film } />
    </div>
  );
};

export default FilmDetail;
