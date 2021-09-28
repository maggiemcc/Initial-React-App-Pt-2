import * as React from "react";
import { films } from "../data/films";
import FilmCard from "./FilmCard";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const favoriteStyle = {
  margin: "2% auto",
  padding: "2% 0px 4% 0",
  background: "rgb(200, 200, 200)",
  // borderRadius: "5px",
  borderRadius: "50px / 100px",
  width: "90%",
  maxWidth: "500px",
  // height: "230px",
  minHeight: "130px",
};

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  >
    •
  </Box>
);

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "800px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const filmInfoContainerStyle = {
  textAlign: "left",
  borderBottom: "1px solid gray",
  borderBottomLastChild: "none",
  display: "grid",
  gridTemplateColumns: "1fr 25% 25%",
  gridTemplateRows: "auto",
  padding: "2%",
};

const filmInfoStyle = {
  margin: 0,
  padding: "2% 0",
  textAlign: "left",
};

const FilmContainer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <h3 style={{ margin: "2% 0" }}> My Favorites </h3>

        <div>
          {favorites.map((filmId) => {
            return (
              <div key={filmId} style={{ padding: "0 5%", }}>
                <p style={{ margin: "1% 0", fontFamily: "courier",}}>
                  {" "}
                  {bull}
                  {filmId}
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
              modalFunction={handleOpen}
              film={{ ...film }}
              sx={{ margin: "auto" }}
            />
          );
        })}

        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <Typography variant="h6">Star Wars Films Information</Typography>
            {films.map((film) => {
              return (
                <div style={filmInfoContainerStyle} key={film.episode_id}>
                  <h4 style={filmInfoStyle}>
                    {film.title}: {film.release_date}
                  </h4>
                  <p style={filmInfoStyle}>Rated: {film.rated}</p>
                  <p style={filmInfoStyle}>Run Time: {film.run_time}</p>
                </div>
              );
            })}
          </Box>
        </Modal>
      </div>
    </Box>
  );
};

export default FilmContainer;
