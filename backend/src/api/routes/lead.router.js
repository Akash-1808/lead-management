import Lead from "../../db/db.js";
import e from "express";
import { leadSchema } from "../../services/zod.js";
import { createLead,getAllLeads, getByFilter } from "../controllers/leads.controller.js";

const routes = e.Router();
// Lead creation route
routes.post("/create", createLead );

// Get all leads
routes.get("/", getAllLeads);

routes.get("/search", getByFilter);

export default routes;