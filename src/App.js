import "./App.css";
import FilmContainer from "./components/FilmContainer";
import ModalInfoContainer from "./components/ModalInfoContainer";
import Box from "@mui/material/Box";

const App = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div className="App">
      <div style={{ maxWidth: 1200, margin: "auto" }}>
        <div
          style={{
            border: "2px solid white",
            padding: "2% 0",
            background: "black",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center"}}>
            <div>
            <h1>Star Wars</h1>
            </div>
            <div>
            <ModalInfoContainer />

            </div>
          </div>

          <FilmContainer sx={{ m: "auto", width: "auto" }} />
        </div>
        <div>
          <h5 style={{ color: "white" }}>
            DGM3790 {bull} © Maggie McCausland {bull} 2021
          </h5>
        </div>
      </div>
    </div>
  );
};

export default App;
