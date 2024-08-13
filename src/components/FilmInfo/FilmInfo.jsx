import './FilmInfo.css';

const FilmInfo = ( { film } ) => {
  return (
    <div className="film-content">
      <div className="film-image-container">
        <img src={ film.image } alt={ film.title } className="film-image" />
      </div>
      <h2>{ film.title }</h2>
      <p><strong>Original Title:</strong> { film.original_title }</p>
      <p><strong>Romanised Title:</strong> { film.original_title_romanised }</p>
      <p><strong>Director:</strong> { film.director }</p>
      <p><strong>Producer:</strong> { film.producer }</p>
      <p><strong>Release Date:</strong> { film.release_date }</p>
      <p><strong>Running Time:</strong> { film.running_time } minutes</p>
      <p><strong>Rotten Tomatoes Score:</strong> { film.rt_score }</p>
      <p>{ film.description }</p>
    </div>
  );
};

export default FilmInfo;