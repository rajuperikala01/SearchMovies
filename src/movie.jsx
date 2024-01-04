export default function MovieCard({movie}) {
    return (
        <div className="movie">
          <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
          <p>{movie.Type} {movie.Year}</p>
          <h5 className="h3">{movie.Title}</h5>
        </div> 
    )
}