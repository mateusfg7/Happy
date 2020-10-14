import { Router } from "express";
import { getRepository } from "typeorm";
import Orphanages from "./models/Orphanage";

const routes = Router();

routes.post("/orphanages", async (request, response) => {
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

  return response.status(201).json({ message: "Hello Word" });
});

export default routes;
