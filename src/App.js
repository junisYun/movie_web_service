import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState();
  useEffect(() => {
    const fetchEvent = async () => {
      setIsLoading(true);
      try {
        const {
          data: {
            data: { movies },
          },
        } = await axios.get(
          "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        console.log(movies);
        setMovies(movies);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchEvent();
  }, []);
  return (
    <section className="container">
      {isLoading ? (
        <>
          <div className="loader">
            <span className="loader__text">Loading</span>
            <Spinner animation="grow" variant="dark" />
          </div>
        </>
      ) : (
        <div className="movies">
          {movies.map((item) => {
            return (
              <Movie
                key={item.id}
                id={item.id}
                title={item.title}
                year={item.year}
                summary={item.summary}
                poster={item.medium_cover_image}
                genres={item.genres.slice(0, 3)}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default App;
