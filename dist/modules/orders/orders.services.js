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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersServices = void 0;
const model_user_1 = __importDefault(require("../users/model.user"));
const makeOrders = (userId, orderInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield model_user_1.default.isUserExists(userId);
    if (!user) {
        return {
            success: false,
            message: 'User Not Found',
            error: {
                code: 404,
                description: 'User Not Found',
            },
        };
    }
    const result = yield model_user_1.default.findOneAndUpdate({ userId }, { $addToSet: { orders: orderInfo } }, { upsert: true, new: true });
    return {
        success: true,
        message: 'Order created Successfully',
        data: null,
    };
});
const getOrders = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield model_user_1.default.isUserExists(userId);
    if (!user) {
        return {
            success: false,
            message: 'User Not Found',
            error: {
                code: 404,
                description: 'User Not Found',
            },
        };
    }
    const result = yield model_user_1.default.findOne({ userId }).select('orders');
    return {
        success: true,
        message: 'Orders Fetch successfully',
        data: result,
    };
});
const getTotalPrice = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield model_user_1.default.isUserExists(userId);
    if (!user) {
        return {
            success: false,
            message: 'User Not Found',
            error: {
                code: 404,
                description: 'User Not Found',
            },
        };
    }
    const result = yield model_user_1.default.aggregate([
        {
            $match: { userId: userId },
        },
        {
            $unwind: '$orders',
        },
        {
            $group: {
                _id: null,
                totalPrice: { $sum: '$orders.price' },
            },
        },
    ]);
    return {
        success: true,
        message: 'Total price calculated successfully!',
        data: {
            totalPrice: result,
        },
    };
});
exports.ordersServices = {
    makeOrders,
    getOrders,
    getTotalPrice,
};
