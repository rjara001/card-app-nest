"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const store_user_1 = require("../schema/store-user");
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    async update(user) {
        console.log('put2');
        await (0, store_user_1.updateUser)(user);
        console.log('updated ok');
    }
    async save(user) {
        console.log('post2');
        await (0, store_user_1.saveUser)(user);
        console.log('created ok');
    }
    async getUser(id) {
        return await (0, store_user_1.getUser)(id);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map