import express from "express";
import { getProducts, getProductByID, createProduct, updateProduct } from "../controllers/productController.js";
import { protect, admin } from '../middleware/authMiddleware.js'


const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductByID).put(protect, admin, updateProduct);


export default router;