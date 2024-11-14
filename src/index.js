import express from 'express'; 
import dotenv from 'dotenv'; 
import session from 'express-session';
import router from 'src/routes/router.js';

dotenv.config();

const app = express();

app.set('views', 'src/views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use("/",router);

app.listen(3000, () => console.log("Estamos conectados en el puerto 3000"));