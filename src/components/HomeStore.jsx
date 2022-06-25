import * as React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Carousel from "./Carousel";
import { Link, useParams } from "react-router-dom";

import { STORES_INFO } from "../data";
const HomeStore = () => {
  const stores = STORES_INFO;
  const [activeStep, setActiveStep] = React.useState(0);
  let { id } = useParams();
  return (
    <Box>
      {stores.map((store) => (
        <Box key={store.id} sx={{ backgroundColor: "lightcyan" }}>
          <Typography
            sx={{
              textAlign: "center",
              backgroundColor: "lightgoldenrodyellow",
            }}
            variant="h3"
            component="div"
            gutterBottom
          >
            {store.store}
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="body2"
              gutterBottom
            >
              {store.item[0]}
            </Typography>
            <Box
              sx={{
                width: "80%",
                height: "200px",
                backgroundColor: "lightgreen",
                margin: "0 auto 5px auto",
              }}
            >
              images
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Button
                sx={{ marginBottom: "5px", width: "120px" }}
                variant="contained"
              >
                Buy
              </Button>
              <Link to={`/storeItems/${store.id}`}>
                <Button
                  sx={{ marginBottom: "5px", width: "120px" }}
                  variant="outlined"
                >
                  All Items
                </Button>
              </Link>
            </Box>
            <Carousel activeStep={activeStep} setActiveStep={setActiveStep} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HomeStore;
