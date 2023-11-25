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
const validation_user_1 = __importDefault(require("./validation.user"));
const services_user_1 = __importDefault(require("./services.user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const zodvalidatedUser = validation_user_1.default.parse(user);
        const result = yield services_user_1.default.createUser(zodvalidatedUser);
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
const getallUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield services_user_1.default.getAllUser();
        res.status(201).json({
            success: true,
            message: 'fetched users successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'something went wrong',
            error,
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const userId = parseInt(id);
        const result = yield services_user_1.default.getSingleUser(userId);
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
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const userId = parseInt(id);
        const updatedUserInfo = req.body;
        const zodvalidatedUser = validation_user_1.default.parse(updatedUserInfo);
        const result = yield services_user_1.default.updateUser(userId, zodvalidatedUser);
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
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const userId = parseInt(id);
        const result = yield services_user_1.default.deleteUser(userId);
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
exports.default = {
    createUser,
    getallUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
