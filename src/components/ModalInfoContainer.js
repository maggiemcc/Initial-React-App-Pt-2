import * as React from "react";
import { films } from "../data/films";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import "./FilmCard.css";
import ModalInfoCard from "../components/ModalInfoCard";

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

const ModalInfoContainer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

export default ModalInfoContainer;
