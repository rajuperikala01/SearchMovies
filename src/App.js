import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import MovieCard from "./movie";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const apiUrl = "http://www.omdbapi.com/?apikey=fa0afaa5";
  async function getData(title) {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    getData("Leader");
  }, []);

  function handleClick() {
    if(title !== ""){
      getData(title);
      setTitle("");
    }
    else{
      alert("please enter movie or series name");
    }
    
  }

  function handleChange(e) {
    setTitle(e.target.value);
  }
  return (
    <div className="App">
      <a href=""><h1>MovieDet.Com</h1></a>
      <div className="search">
        <input className="input"type="text" value={title} onChange={handleChange} placeholder="Search Movie" />
        <button onClick={handleClick}>Search</button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}