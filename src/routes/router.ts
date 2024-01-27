const { Router } = require("express");

const router = Router();

router.get("/", (req: any,res: { json: (arg0: { message: string; }) => void; }) => {
 res.json({message: "Hello from docker!!"})
})

router.get("/health" , (req: any,res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
 res.status(200).json({message: "Everything looks healthy here!!"})
})

export default router