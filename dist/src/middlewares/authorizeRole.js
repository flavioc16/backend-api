"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRole = authorizeRole;
// Middleware para verificar se o usuário tem a role necessária
function authorizeRole(requiredRole) {
    return (req, res, next) => {
        const userRole = req.role;
        if (userRole !== requiredRole) {
            return res.status(403).json({ error: "Access denied" }); // Forbidden
        }
        next();
    };
}
