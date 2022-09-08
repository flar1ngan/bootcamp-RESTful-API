import express from "express";
import { createAgent, deleteAgentById, getAllAgents, getAgentById, updateAgent } from "../controllers/agentController.js";

const router = express.Router();

router.post("/create", createAgent);

router.get("/get", getAllAgents);

router.get("/get/:id", getAgentById);

router.delete("/delete/:id", deleteAgentById);

router.put("/update/:id", updateAgent);

export default router;