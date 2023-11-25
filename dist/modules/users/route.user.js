"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const controller_user_1 = __importDefault(require("./controller.user"));
const router = express_1.default.Router();
router.post('/api/users', controller_user_1.default.createUser);
router.get('/api/users', controller_user_1.default.getallUser);
router.get('/api/users/:userId', controller_user_1.default.getSingleUser);
router.put('/api/users/:userId', controller_user_1.default.updateUser);
router.delete('/api/users/:userId', controller_user_1.default.deleteUser);
exports.userRouter = {
    router,
};
