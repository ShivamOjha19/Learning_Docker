import express from 'express'
import router from './routes/router'

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/", router)

app.listen(PORT , ()=> console.log("Port ${PORT} is Up and Running") )