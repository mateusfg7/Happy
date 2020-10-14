import { Router } from "express";
import OrphanageController from "./controllers/OrphanagesController";

const routes = Router();

routes.get("/orphanages", OrphanageController.index);
routes.post("/orphanages", OrphanageController.create);

export default routes;
