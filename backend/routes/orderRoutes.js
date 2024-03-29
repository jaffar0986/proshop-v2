import express from "express";
import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateorderToPaid,
    updateorderToDelivered,
    getOrders
} from "../controllers/orderController.js"
import { protect, admin} from "../middleware/authMiddleware.js";


const router = express.Router();


//all the below are connected to /api/users
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders); 
router.route('/mine').get(protect, getMyOrders)
router.route('/:id').get(protect, admin, getOrderById)
router.route('/:id/pay').put(protect, updateorderToPaid);
router.route('/:id/deliver').put(protect, admin, updateorderToDelivered);



export default router;