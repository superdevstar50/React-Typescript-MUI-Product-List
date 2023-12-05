import React from "react";
import { Container, Typography } from "@mui/material";

import ProductList from "./components/ProductList";

const App: React.FC = () => {
  return (
    <Container>
      <Typography display="flex" justifyContent="center" py="2rem" variant="h4">
        Product List
      </Typography>
      <ProductList />
    </Container>
  );
};

export default App;
