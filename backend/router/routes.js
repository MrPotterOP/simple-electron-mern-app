import express from "express";

//Controllers
import postRegister from "../controllers/postRegister.js";
import postLogin from "../controllers/postLogin.js";

const router = express.Router();



router.post("/register", postRegister);
router.post("/login", postLogin);


export default router;