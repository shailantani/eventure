import express from "express";
import {
  addMovie,
  getAllMovies,
  getMovieById,
} from "/Users/shailantani/trialevents/backend/controllers/event-controller.js";
const movieRouter = express.Router();
movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.post("/", addMovie);

export default movieRouter;
