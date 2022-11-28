import express from "express";

//Controllers
import postRegister from "../controllers/postRegister.js";

const router = express.Router();



router.post("/register", postRegister);


export default router;