"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const orders_controller_1 = require("./orders.controller");
const router = express_1.default.Router();
router.put('/api/users/:userId/orders', orders_controller_1.orderControllers.makeOrders);
router.get('/api/users/:userId/orders', orders_controller_1.orderControllers.getOrders);
router.get('/api/users/:userId/orders/total-price', orders_controller_1.orderControllers.getTotalPrice);
exports.orderRoutes = {
    router
};
