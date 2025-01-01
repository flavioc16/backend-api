"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../prisma"));
async function isAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({ error: 'Token not provided' });
    }
    const [, token] = authToken.split(' ');
    try {
        const { sub, role } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        req.user_id = sub;
        req.role = role;
        if (role === 'USER') {
            const cliente = await prisma_1.default.cliente.findFirst({
                where: {
                    userId: sub
                }
            });
            if (!cliente) {
                return res.status(401).json({ error: 'Client not found', });
            }
            req.cliente_id = cliente.id;
        }
        next();
    }
    catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).json({ error: 'Invalid token' });
    }
}
