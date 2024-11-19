import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import session from "express-session";
import { initializeSessionDates } from "./middlewares/sessionMiddleware.js";
dotenv.config();

const app = express();

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    })
);
app.use(function (req, res, next) {
    res.locals.user = req.session.user || null;
    next();
});
// Inicializar las fechas del filtro
app.use(initializeSessionDates);

app.set("views", "src/views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(3000, () => console.log("Estamos conectados en el puerto 3000"));
