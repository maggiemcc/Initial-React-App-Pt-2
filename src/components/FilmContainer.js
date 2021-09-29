import * as React from "react";
import { films } from "../data/films";
import FilmCard from "./FilmCard";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./FilmCard.css";
import Typography from "@mui/material/Typography";
// import ModalInfoChip from "../components/ModalInfoChip";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const filmInfoContainerStyle = {
  textAlign: "left",
  borderBottom: "1px solid gray",
  padding: "2%",
  width: "auto",
};

const filmInfoStyle = {
  margin: 0,
  padding: "2% 0",
  // border: "1px solid red",
  display: "inline",
  paddingRight: "2.5%",
  width: "auto",
  fontSize: "14px",
};

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
              modalFunction={handleOpen}
              film={{ ...film }}
              sx={{ margin: "auto" }}
            />
          );
        })}
      </div>

      <div>
  
        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <Typography variant="h6">More Star Wars Films Info</Typography>
            {films.map((film) => {
              return (
                <div style={filmInfoContainerStyle} key={film.episode_id}>
                  <div>
                    <h4 style={filmInfoStyle}>{film.title}:</h4>
                    <p style={filmInfoStyle}>{film.release_date}</p>
                    {bull}
                    <p style={filmInfoStyle}>{film.rated}</p>
                    {bull}
                    <p style={filmInfoStyle}>{film.run_time}</p>

                  </div>
                </div>
              );
            })}
            <a
              href="https://www.starwars.com/films"
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  margin: "2%",
                  padding: "2%",
                  background: "darkRed",
                  color: "white",
                  borderRadius: "20px",
                  "&:hover": {
                    bgcolor: "darkBlue",
                  },
                }}
              >
                Learn More
              </Typography>
            </a>
          </Box>
        </Modal>
      </div>
    </Box>
  );
};

export default FilmContainer;
