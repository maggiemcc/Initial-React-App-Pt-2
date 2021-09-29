import * as React from "react";
import Chip from "@mui/material/Chip";
import InfoIcon from "@mui/icons-material/Info";


const ModalInfoChip = (props) => {
  const handleInfoClick = () => {
    console.log("thanks for clicking!");
    props.modalFunction();
  };

  return (
    <Chip
      label="More Info"
      onClick={handleInfoClick}
      icon={
        <InfoIcon
          style={{
            padding: "1%",
            paddingRight: "0",
            margin: "auto",
            justifyContent: "center",
            color: "black",
            background: "none",
          }}
        />
      }
      sx={{
        margin: "auto auto",
        background: "white",
        width: "130px",
        fontWeight: "bold",
        "&:hover": {
          background: "blue",
          border: "1px solid white"
        },
      }}
    />
  );
};

export default ModalInfoChip;
