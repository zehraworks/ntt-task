import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/productsSlice";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import AutoPlaySwipeableViews from "react-swipeable-views";


export default function Cards({ isFiltered }) {
  let products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  if (isFiltered === true) {
    products = products.filter((product) => product.isFavorited);
  }

  const swipeableViewContent = products.slice(0, 4).map((product) => (
    <React.Fragment key={product.id}>
      <Card {...product} />
    </React.Fragment>
  ));

  const maxSteps = swipeableViewContent.length;

  if (products.length === 0) {
    return <div>No favorite</div>;
  }

  return (
    <>
      <Box
        sx={{
          maxWidth: 340,
          flexGrow: 1,
          display: { xs: "block", sm: "none" },
          marginX: "auto"
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {swipeableViewContent}
        </AutoPlaySwipeableViews>
        <MobileStepper
          sx={{ justifyContent: "center" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          gap: "1em",
        }}
      >
        {isLoading ? "Loading..." : swipeableViewContent}
      </Box>
    </>
  );
}
