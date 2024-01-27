const { Router } = require("express");

const router = Router();

router.get("/", (req,res) => {
 res.json({message: "Hello from docker!!"})
})

router.get("/health" , (req,res) => {
 res.status(200).json({message: "Everything looks healthy here!!"})
})

export default router