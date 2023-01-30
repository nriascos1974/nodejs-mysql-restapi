import express from "express";
import empleados from "./routes/empleados.routes.js";
import index from "./routes/index.routes.js";

/* Aqui creo el servidor */
const app = express();

app.use(express.json())

app.use(empleados);
app.use(index);

export default app

