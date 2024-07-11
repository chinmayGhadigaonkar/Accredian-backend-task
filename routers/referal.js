import { Router } from "express";
import { addReferral } from "../controller/referalController.js";

const router = Router();


router.post("/referal", addReferral);

export default router;