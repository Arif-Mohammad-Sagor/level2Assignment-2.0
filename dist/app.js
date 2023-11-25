"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_user_1 = require("./modules/users/route.user");
const orders_router_1 = require("./modules/orders/orders.router");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(route_user_1.userRouter.router); // application api
app.use(orders_router_1.orderRoutes.router);
app.get('/', (req, res) => {
    res.send('Hello world');
});
// app.all('*', globalError.handleAllRequests); //all wrong route handling
// app.use((error,req,res,next) => {
//   globalError.errorHandler(error,req, res, next);
// });
exports.default = app;
