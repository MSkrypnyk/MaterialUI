import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { data } from "../helpers/data";
import TextField from "@mui/material/TextField";

export const Home = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = data.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search pizzas"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={handleSearchChange}
        sx={{
          marginTop: "50px",
          marginBottom: "10px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            backgroundColor: "rgb(205, 205, 193)",
            color: "black",
            borderColor: "black",
            "& .Mui-focused": {
              borderColor: "black",
            },
          },
          "& .MuiOutlinedInput-input": {
            padding: "15px",
            fontSize: "25px",
          },
          "& .MuiInputLabel-outlined": {
            fontSize: "25px",
            color: "black",
          },
        }}
      />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredData.map((pizza) => (
          <Card key={pizza.id} sx={{ maxWidth: 345, margin: "10px" }}>
            <CardMedia
              sx={{ height: 300 }}
              image={pizza.image}
              title={pizza.name}
            />
            <CardContent style={{ backgroundColor: "rgb(205, 205, 193)" }}>
              <Typography gutterBottom variant="h5" component="div">
                {pizza.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pizza.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
