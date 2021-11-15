"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// this shim is required
require("reflect-metadata");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var routing_controllers_1 = require("routing-controllers");
var routing_controllers_openapi_1 = require("routing-controllers-openapi");
var UserController_1 = require("./UserController");
// creates express app, registers all controller routes and returns you express app instance
var app = (0, routing_controllers_1.createExpressServer)({
    routePrefix: '/api',
    controllers: [UserController_1.UserController], // we specify controllers we want to use
});
var storage = (0, routing_controllers_1.getMetadataArgsStorage)();
//console.log(storage)
var spec = (0, routing_controllers_openapi_1.routingControllersToSpec)(storage, { routePrefix: "/api" });
//console.log(spec)
// var openAPI = express();
// openAPI.get("/swagger/docs/v1", (req, res) => {
//     res.send(spec);
// })
// openAPI.listen(3101);
app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(spec));
// run express application on port 3000
app.listen(3100);
