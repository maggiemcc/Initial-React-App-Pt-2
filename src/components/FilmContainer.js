import * as React from "react";
import { films } from "../data/films";
import FilmCard from "./FilmCard";
import Box from "@mui/material/Box";
import "./FilmCard.css";

const favoriteStyle = {
  margin: "2% auto",
  padding: "2% 0px 4% 0",
  color: "white",
  border: "2px solid white",
  borderRadius: "50px / 100px",
  width: "90%",
  maxWidth: "500px",
  minHeight: "130px",
};

const bull = (
  <Box
    component="span"
    style={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  >
    •
  </Box>
);


const FilmContainer = () => {
  const [favorites, setFavorites] = React.useState([]);
  const addToFavorites = (film) => {
    console.log(`${film.title} was clicked`);
    if (!favorites.includes(film.title)) {
      setFavorites((prevState) => [...prevState, film.title]);
    } else {
      setFavorites(() => {
        return favorites.filter((item) => item !== film.title);
      });
    }
  };

  return (
    <Box>
      <div style={favoriteStyle}>
        <h3 style={{ margin: "2% 0", textDecoration: "underline" }}>
          {" "}
          My Favorites{" "}
        </h3>

        <div>
          {favorites.map((filmId) => {
            return (
              <div key={filmId} style={{ padding: "0 5%" }}>
                <p
                  style={{
                    margin: "1% 0",
                    fontFamily: "courier",
                    fontWeight: "bold",
                  }}
                >
                  {bull} {filmId}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {films.map((film) => {
          return (
            <FilmCard
              key={film.episode_id}
              addToFavoritesFunction={addToFavorites}
              film={{ ...film }}
              sx={{ margin: "auto" }}
            />
          );
        })}
      </div>
    </Box>
  );
};

export default FilmContainer;
