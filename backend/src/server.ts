import express from "express";
import { getRepository } from "typeorm";

import Orphanages from "./models/Orphanage";

import "./database/connection";

const app = express();

app.use(express.json());

app.post("/orphanages", async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanages);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  return response.json({ message: "Hello Word" });
});

app.listen(3333);
