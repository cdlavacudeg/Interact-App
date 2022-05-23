import express from 'express';

const router= express.Router();

router.route('/').get((req,res)=> res.send("Lista de profesores extraida desde Mongo"));

export default router;
