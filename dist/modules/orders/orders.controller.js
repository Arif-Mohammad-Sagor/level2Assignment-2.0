"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControllers = void 0;
const orders_services_1 = require("./orders.services");
const makeOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const orderInfo = req.body;
        const result = yield orders_services_1.ordersServices.makeOrders(userId, orderInfo);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'something went wrong',
            error,
        });
    }
});
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield orders_services_1.ordersServices.getOrders(userId);
        res.status(201).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'something went wrong',
            error,
        });
    }
});
const getTotalPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield orders_services_1.ordersServices.getTotalPrice(userId);
        res.status(201).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'something went wrong',
            error,
        });
    }
});
exports.orderControllers = {
    makeOrders,
    getOrders,
    getTotalPrice,
};
