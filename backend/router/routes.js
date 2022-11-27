import express from "express";

const router = express.Router();


router.get("/test", (req, res)=>{
    console.log(req.headers);
    res.json({msg: "OK"});
});


export default router;