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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../users/user.service");
const util_1 = require("../util");
let WordService = class WordService {
    constructor(userService) {
        this.userService = userService;
    }
    async save(id, word) {
        let user = await this.userService.getUser(id);
        let group = user.Groups.find(_ => _.Name === '__BagTranslate');
        if (group === undefined)
            throw Error('Group __BagTranlate not exist');
        let words = (group.Words !== '') ? (0, util_1.parseCsv)(group.Words) : [];
        words.push(word);
        group.Words = (0, util_1.jsonToCsv)(words);
        user.Groups = user.Groups.filter(_ => _.Name !== '__BagTranlate');
        user.Groups.push(group);
        this.userService.update(user);
    }
};
WordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], WordService);
exports.WordService = WordService;
//# sourceMappingURL=word.service.js.map