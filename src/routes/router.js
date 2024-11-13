import { Router } from "express";
import userRouter from './userRouter.js'
const router = Router();

router.get("/",(req,res) => {
    res.send("Hola mundo");
})

router.use('/transaction',(req,res)=>{
    res.render('transaction/home')
});

router.use('/user',userRouter);

export default router;