"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var routing_controllers_1 = require("routing-controllers");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function () {
        return 'This action returns all users';
    };
    UserController.prototype.getOne = function (id) {
        return 'This action returns user #' + id;
    };
    UserController.prototype.post = function (user) {
        return 'Saving user...';
    };
    UserController.prototype.put = function (id, user) {
        return 'Updating a user...';
    };
    UserController.prototype.remove = function (id) {
        return 'Removing user...';
    };
    __decorate([
        (0, routing_controllers_1.Get)('/users'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getAll", null);
    __decorate([
        (0, routing_controllers_1.Get)('/users/:id'),
        __param(0, (0, routing_controllers_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getOne", null);
    __decorate([
        (0, routing_controllers_1.Post)('/users'),
        __param(0, (0, routing_controllers_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "post", null);
    __decorate([
        (0, routing_controllers_1.Put)('/users/:id'),
        __param(0, (0, routing_controllers_1.Param)('id')),
        __param(1, (0, routing_controllers_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "put", null);
    __decorate([
        (0, routing_controllers_1.Delete)('/users/:id'),
        __param(0, (0, routing_controllers_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "remove", null);
    UserController = __decorate([
        (0, routing_controllers_1.Controller)()
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
