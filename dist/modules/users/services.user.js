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
const model_user_1 = __importDefault(require("./model.user"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield model_user_1.default.isUserExists(user.userId)) {
        return {
            success: false,
            message: 'User Already Exists',
            error: {
                code: 404,
                description: 'User Already Exists',
            },
        };
    }
    const result = yield model_user_1.default.create(user);
    return {
        success: true,
        message: 'User created successfully',
        data: result,
    };
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_user_1.default.find();
    return result;
});
const getSingleUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
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
    const result = yield model_user_1.default.findOne({ userId });
    return {
        success: true,
        message: 'User Fetch successfully',
        data: result,
    };
});
const updateUser = (params, userInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield model_user_1.default.isUserExists(params);
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
    const result = yield model_user_1.default.findOneAndUpdate({ userId: params }, { $set: userInfo }, { upsert: true, new: true });
    return {
        success: true,
        message: 'User updated successfully',
        data: result,
    };
});
const deleteUser = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield model_user_1.default.isUserExists(params);
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
    let result = yield model_user_1.default.findOneAndDelete({ userId: params });
    return {
        success: true,
        message: 'User deleted successfully',
        data: null,
    };
});
exports.default = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
