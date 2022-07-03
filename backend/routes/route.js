import express from 'express';
import { addProduct, deleteProduct, getProduct } from './controller.js';

const router = express.Router();

router.post('/', addProduct);
router.get('/getproducts', getProduct);
router.delete('/:id', deleteProduct)


export default router;