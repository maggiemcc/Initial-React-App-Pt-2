import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const ModalInfoCard = (props) => {
  const handleInfoClick = () => {
    console.log("thanks for clicking!");
    props.modalFunction();
  };

  return (
    <Card
      sx={{
        padding: 0,
        background: "none",
        margin: "auto",
        textAlign: "center",
        justifyContent: "space-evenly",
        radius: "20%",
      }}
    >
      <CardContent>
        <CardActions>
          <IconButton
            sx={{
              padding: "0",
              margin: "auto",
              justifyContent: "center",
              color: "white",
              "&:hover": {
                border: "1px solid red",
                color: "red"
              },
            }}
            onClick={handleInfoClick}
          >
            <InfoIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ModalInfoCard;
