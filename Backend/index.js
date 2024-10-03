let { getMovies, getMovieById, addMovie } = require("./movies");
const express = require("express");
const app = express();
const PORT = 3000

app.get(express.json());

app.get("/movies", (req, res)=>{
 res.json(getMovies());
});

app.get("/movies/:id", (req, res)=>{
 const movie = getMovieById(parseInt(req.params.id));
 if(!movie) return res.status(404).send("Movie not found");
 res.json(movie);
});

app.post("/movies", (req, res)=>{
 const newMovie = addMovie(req.body);
 res.status(201).json(movie);
});


app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});

module.exports = app;