"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailUserControle = void 0;
const DetailUserService_1 = require("../services/DetailUserService");
class DetailUserControle {
    async handle(req, res) {
        const user_id = req.user_id;
        const role = req.role;
        const detailUserService = new DetailUserService_1.DetailUserService();
        const user = await detailUserService.execute(user_id, role);
        return res.json(user);
    }
}
exports.DetailUserControle = DetailUserControle;
