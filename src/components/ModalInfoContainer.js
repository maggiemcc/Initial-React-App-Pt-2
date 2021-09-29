import * as React from "react";
import { films } from "../data/films";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import "./FilmCard.css";
import ModalInfoCard from "../components/ModalInfoCard";
// import { typography } from "@mui/system";

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

const ModalInfoContainer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const bull = (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        mx: "2px",
        transform: "scale(0.8)",
        paddingRight: "2%",
      }}
    >
      •
    </Box>
  );

  return (
    <Box>
      <div>
        <ModalInfoCard modalFunction={handleOpen} />

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

export default ModalInfoContainer;
