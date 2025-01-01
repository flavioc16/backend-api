"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Controllers
// Auth Controllers
const AuthUserController_1 = require("./controllers/AuthUserController");
const DetailUserControle_1 = require("./controllers/DetailUserControle");
// Admin User Controllers
const CreateUserController_1 = require("./controllers/admin/CreateUserController");
// Admin Client Controllers
const GetAllClientesController_1 = require("./controllers/admin/client/GetAllClientesController");
const CreateClienteController_1 = require("./controllers/admin/client/CreateClienteController");
const GetClienteByIdController_1 = require("./controllers/admin/client/GetClienteByIdController");
const UpdateClienteController_1 = require("./controllers/admin/client/UpdateClienteController");
const DeleteClienteController_1 = require("./controllers/admin/client/DeleteClienteController");
const GetCountClientsController_1 = require("./controllers/admin/client/GetCountClientsController");
//Product Controllers
const CreateProdutoController_1 = require("./controllers/admin/produto/CreateProdutoController");
const UpdateProdutoController_1 = require("./controllers/admin/produto/UpdateProdutoController");
const GetAllProdutosController_1 = require("./controllers/admin/produto/GetAllProdutosController");
const GetProdutoByIdController_1 = require("./controllers/admin/produto/GetProdutoByIdController");
const DeleteProdutoController_1 = require("./controllers/admin/produto/DeleteProdutoController");
const GetTotalProdutoController_1 = require("./controllers/admin/produto/GetTotalProdutoController");
const GetCountProdutoController_1 = require("./controllers/admin/produto/GetCountProdutoController");
// Admin Compra Controllers
const GetTotalComprasDoDiaController_1 = require("./controllers/admin/compra/GetTotalComprasDoDiaController");
const GetComprasController_1 = require("./controllers/admin/compra/GetComprasController");
const CreateCompraController_1 = require("./controllers/admin/compra/CreateCompraController");
const GetCompraByIdController_1 = require("./controllers/admin/compra/GetCompraByIdController");
const UpdateCompraController_1 = require("./controllers/admin/compra/UpdateCompraController");
const DeleteCompraController_1 = require("./controllers/admin/compra/DeleteCompraController");
//Relatorio
const GetComprasPorDatasController_1 = require("./controllers/admin/relatorio/GetComprasPorDatasController");
// Outros Controllers
const GetComprasPorIdClientController_1 = require("./controllers/admin/GetComprasPorIdClientController");
//Pagamentos
const CreatePagamentoController_1 = require("./controllers/admin/pagamento/CreatePagamentoController");
const GetTotalPagamentosDoDiaController_1 = require("./controllers/admin/pagamento/GetTotalPagamentosDoDiaController");
// Middlewares
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const authorizeRole_1 = require("./middlewares/authorizeRole");
const router = (0, express_1.Router)();
exports.router = router;
// Auth Routes
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserControle_1.DetailUserControle().handle);
// Admin Routes new user (login)
router.post('/users', new CreateUserController_1.CreateUserController().handle);
// Admin Routes Clients
router.post('/clients', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new CreateClienteController_1.CreateClienteController().handle);
router.put('/clients', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new UpdateClienteController_1.UpdateClienteController().handle);
router.get('/clients', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetAllClientesController_1.GetAllClientesController().handle);
router.get('/clients/:clienteId', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetClienteByIdController_1.GetClienteByIdController().handle);
router.delete('/clients', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new DeleteClienteController_1.DeleteClienteController().handle);
router.get('/clients/purchases/:clienteId/compras', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetComprasPorIdClientController_1.GetComprasPorIdController().handle);
router.get('/count/clients', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetCountClientsController_1.GetClientesCountController().handle);
// Criar um novo produto
router.post('/produtos', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new CreateProdutoController_1.CreateProdutoController().handle);
router.put('/produtos', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new UpdateProdutoController_1.UpdateProdutoController().handle);
router.get('/produtos', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetAllProdutosController_1.GetAllProdutosController().handle);
router.get('/produtos/:id', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetProdutoByIdController_1.GetProdutoByIdController().handle);
router.get('/produtos/total', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetTotalProdutoController_1.GetTotalProdutosController().handle);
router.delete('/produtos', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new DeleteProdutoController_1.DeleteProdutoController().handle);
router.get('/count/produtos', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetCountProdutoController_1.GetProdutosCountController().handle);
// Admin Routes Compras
router.post('/compras', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new CreateCompraController_1.CreateCompraController().handle);
router.put('/compras', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new UpdateCompraController_1.UpdateCompraController().handle);
router.get('/compras', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetComprasController_1.GetAllComprasController().handle);
router.get('/compras/total-do-dia', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetTotalComprasDoDiaController_1.GetTotalComprasDoDiaController().handle);
router.get('/compras/:compraId', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetCompraByIdController_1.GetCompraByIdController().handle);
router.delete('/compras', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new DeleteCompraController_1.DeleteCompraController().handle);
// Admin Routes Pagamentos
router.post('/pagamentos', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new CreatePagamentoController_1.CreatePagamentoController().handle);
router.get('/total/pagamentos', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetTotalPagamentosDoDiaController_1.GetTotalPagamentosDoDiaController().handle);
//Admin Routes Relatorio
router.get('/relatorio/compras', isAuthenticated_1.isAuthenticated, (0, authorizeRole_1.authorizeRole)('ADMIN'), new GetComprasPorDatasController_1.GetComprasPorDatasController().handle);
