import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

import { Product } from "../../interfaces/product";

const sourceItems = ["YouTube", "Google", "ChatGPT"];

interface ToolbarProps {
  onSubmit: (product: Product) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [source, setSource] = useState(sourceItems[0]);

  const handleSubmit = () => {
    const newProduct: Product = {
      id: Date.now(),
      title,
      source,
    };

    onSubmit(newProduct);

    setTitle("");
    setSource(sourceItems[0]);
  };

  return (
    <Box display="flex" alignItems="center" gap="1rem" pb="3rem">
      <FormControl fullWidth>
        <TextField
          label="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl style={{ width: "50rem" }}>
        <InputLabel>Source</InputLabel>
        <Select
          label="Source"
          value={source}
          onChange={(e) => setSource(e.target.value as string)}
        >
          {sourceItems.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        disabled={!title}
        onClick={handleSubmit}
        style={{ height: "48px" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Toolbar;
