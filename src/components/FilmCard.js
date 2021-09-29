import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FilmCard = (props) => {
  let imageStyle = {
    height: "auto",
    width: "93%",
    overflow: "hidden",
    borderWidth: 5,
    border: "3px solid white",
    borderRadius: 5,
    padding: 0,
    margin: 0,
  };

  const [favorite, setFavorite] = React.useState(false);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    props.addToFavoritesFunction(props.film);
  };

  return (
    <Card
      sx={{
        width: "450px",
        display: "flex",
        flexDirection: "column",
        m: 2,
        bgcolor: "darkBlue",
        "&:hover": {
          borderRadius: 4,
          bgcolor: "darkRed",
        },
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontWeight: "bold" }}
          color="primary.contrastText"
          typography="h6"
          gutterBottom
        >
          {props.film.title} <br></br>
        </Typography>
        <div style={{ display: "grid", gridTemplateColumns: "40% auto" }}>
          <div style={{ margin: "auto" }}>
            <img style={imageStyle} src={props.film.image} alt="poster" />
      <div style={{display: "flex", margin: "auto", padding: 0, height: 40, lineHeight: 40, justifyContent: "center"}}>
            <Typography
              sx={{ fontWeight: "bold" }}
              color="primary.contrastText"
              typography="h6"
            >
              Episode: {props.film.episode_id}
            </Typography>
            <CardActions
              sx={{
                justifyContent: "space-evenly",
                textAlign: "center",
              }}
            >
              <IconButton
                sx={{ p: 0, m: 0, color: favorite ? "#F00" : "#fff" }}
                onClick={handleFavoriteClick}
              >
                <FavoriteIcon />
              </IconButton>
            </CardActions>
            </div>

          </div>
          <p
            style={{
              color: "#fff",
              textAlign: "left",
              fontSize: "16px",
              width: "85%",
              margin: "auto auto",
            }}
          >
            {props.film.opening_crawl}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilmCard;
