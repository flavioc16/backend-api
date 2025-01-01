INSERT INTO user (id, name, username, password, role, created_at, updated_at) VALUES
('c14dac77-d6c4-4d73-822f-d408cb6bbffe', 'Marcos Aurelio Sousa De Castro', 'bazika', '$2a$10$S9pRjXDCy.69LyDYrdSeBOHT5MdI4aHBcAQygGAyn7ZhqnFZnTj62', 'USER', '2024-12-30 14:44:51', '2024-12-30 14:44:51'),
('bf8f86c2-3592-4513-9325-37b323a52a20', 'Teste', '5888888', '$2a$10$Qe7Tga9PZ/yw0cFtqf7dfeNXdlTnVVk4SxAOhVCxlIKbY5QC2sT72', 'USER', '2024-12-30 18:23:23', '2024-12-30 18:23:23'),
('ce1d65a7-4503-4090-b924-16370d0d7915', 'Cliente Teste', '989898989', '$2a$10$kXuBtl/izuTb1LEM8cFGgekEnpFO3mXYODEvjX4U/3euKtwbgZ3ue', 'USER', '2024-12-30 19:34:38', '2024-12-30 19:34:38'),
('17d323f2-438f-4406-b02c-410345ce5692', 'Danilo Feitosa', 'danilo', '$2a$10$.vA4Z/tJH/XByWBvrrw7GurSPrlHJt/wGdijPao6G/leoC.0SE3Oi', 'USER', '2024-12-30 20:52:00', '2024-12-30 20:52:00'),
('da09a3a6-2439-4ee9-ae63-676929660ef3', 'admin', 'admin', '$2a$10$KHiDumHpX93R/RC.tpa2wOw2tY6TlQ9P64ZlZx9otOyEvyP/3zamW', 'ADMIN', '2024-07-23 13:00:57', '2024-07-23 13:00:57');

INSERT INTO cliente (id, nome, endereco, referencia, email, telefone, created_at, updated_at, userId) VALUES
('b38b2813-afed-44ab-9c0b-ad4223272fee', 'Marcos Aurelio Sousa De Castro', 'Cicero Do Monte', 'Bazika Sobrinho ', 'bazika@teste', '(99) 9-9999-9999', '2024-12-30 14:44:51', '2024-12-30 14:44:51', 'c14dac77-d6c4-4d73-822f-d408cb6bbffe'),
('7a3724a6-3cf6-476a-89b5-ad63189c141f', 'Teste', 'Teste', 'Teste', 'Teste@teste', '(25) 0-0222-2222', '2024-12-30 18:23:23', '2024-12-30 18:23:23', 'bf8f86c2-3592-4513-9325-37b323a52a20'),
('0dea3c3d-fa5d-4ac5-89a5-2e77ff39d4cd', 'Cliente Teste', 'Cliente Teste', 'Cliente', 'cliente@teste', '(98) 9-8989-8989', '2024-12-30 19:34:38', '2024-12-30 19:34:38', 'ce1d65a7-4503-4090-b924-16370d0d7915'),
('0b95532b-4e5a-4183-8852-0cf18cc61541', 'Danilo Feitosa', 'Dawdwa', 'Dawdawdaw', 'danilo@hotmail.com', '(55) 5-5555-5555', '2024-12-30 20:52:00', '2024-12-30 20:52:00', '17d323f2-438f-4406-b02c-410345ce5692');

INSERT INTO compra (id, descricaoCompra, totalCompra, valorInicialCompra, tipoCompra, statusCompra, created_at, updated_at, dataDaCompra, dataVencimento, isVencida, userId, clienteId, pagamentoId) VALUES
('3db2195f-39cd-4c3e-948d-b2e26362bb22', '10', '10', '10', '0', '0', '2024-12-30 18:59:41', '2024-12-30 18:59:41', '2024-12-30 18:59:41', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('8d56bcac-08d8-4924-a5a5-e1d47b09808e', '10', '10', '10', '0', '0', '2024-12-30 19:00:27', '2024-12-30 19:00:27', '2024-12-30 19:00:27', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('2fed16d6-5f64-4f72-b3c4-36103299acdc', 'Teste', '10', '10', '0', '0', '2024-12-30 19:03:43', '2024-12-30 19:03:43', '2024-12-30 19:03:43', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('b01779f2-d187-4eb8-85f2-29af4c4615be', 'Teste', '10', '10', '0', '0', '2024-12-30 19:06:53', '2024-12-30 19:06:53', '2024-12-30 19:06:53', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('3bf81949-0830-4fae-ba75-0e68a41bce74', 'Teste', '10', '10', '0', '0', '2024-12-30 19:08:08', '2024-12-30 19:08:08', '2024-12-30 19:08:08', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('609678a4-defc-47e5-b8a1-34840f7d0dcc', 'Teste', '25', '25', '0', '0', '2024-12-30 19:12:58', '2024-12-30 19:12:58', '2024-12-30 19:12:58', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('188e26a8-269c-4525-ae57-fb9c59fbd2f7', '100', '10', '10', '0', '0', '2024-12-30 19:16:07', '2024-12-30 19:16:07', '2024-12-30 19:16:07', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('eb43aa21-4e36-4e5c-abe8-913bc7796ceb', '10', '10', '10', '0', '0', '2024-12-30 19:18:02', '2024-12-30 19:18:02', '2024-12-30 19:18:02', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('fcdca0d2-7660-41ee-b38d-9d05f7a0a5ac', '10', '10', '10', '0', '0', '2024-12-30 19:18:56', '2024-12-30 19:18:56', '2024-12-30 19:18:56', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('3235da18-ebe5-4f0c-bf1e-70fa53c767a6', '10', '1', '1', '0', '0', '2024-12-30 19:20:00', '2024-12-30 19:20:00', '2024-12-30 19:20:00', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('b1ca458f-f7c1-42cb-9696-a3c97c1da54a', 'Teste', '10', '10', '0', '0', '2024-12-30 19:20:23', '2024-12-30 19:20:23', '2024-12-30 19:20:23', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('0154aad0-4179-44ee-b67d-fa75839f53a5', '10', '10', '10', '0', '0', '2024-12-30 19:28:38', '2024-12-30 19:28:38', '2024-12-30 19:28:38', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('60224e36-aecd-4109-bfe0-25f693933087', '10', '10', '10', '0', '0', '2024-12-30 19:30:14', '2024-12-30 19:30:14', '2024-12-30 19:30:14', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('5c0fc267-4559-4fa0-814f-f1a26e88a506', '100', '10', '10', '0', '1', '2024-12-30 18:55:17', '2024-12-30 19:51:02', '2024-12-30 18:55:17', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('052b150d-b2a4-4273-a968-189bc4b669af', 'Teste', '3.890000000000001', '15', '0', '0', '2024-12-30 18:58:42', '2024-12-30 19:51:26', '2024-12-30 18:58:42', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', 'b38b2813-afed-44ab-9c0b-ad4223272fee', NULL),
('a9a65de5-93aa-4dc4-83a6-2c644d2a86d8', 'Compra Teste', '5', '25', '0', '0', '2024-12-30 19:35:01', '2024-12-30 19:59:16', '2024-12-30 19:35:01', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', '0dea3c3d-fa5d-4ac5-89a5-2e77ff39d4cd', NULL),
('5b6df119-1f44-4dc8-b574-4e8e625bd008', '1 Litro De Mel', '20', '25', '0', '0', '2024-01-01 20:03:25', '2024-12-30 20:04:43', '2024-01-01 20:03:25', '2024-01-31 00:00:00', '1', 'da09a3a6-2439-4ee9-ae63-676929660ef3', '0dea3c3d-fa5d-4ac5-89a5-2e77ff39d4cd', NULL),
('177f444e-5446-4d95-ba4d-5dec3fedb94a', '1 Litro De Mel', '50', '50', '0', '0', '2024-12-30 20:48:17', '2024-12-30 20:48:17', '2024-12-30 20:48:17', '2025-01-29 00:00:00', '0', 'da09a3a6-2439-4ee9-ae63-676929660ef3', '0dea3c3d-fa5d-4ac5-89a5-2e77ff39d4cd', NULL);

INSERT INTO pagamento (id, valorPagamento, clienteId, userId, created_at, updated_at, compraId) VALUES
('8e527f15-8803-4c11-bb8b-9c33ef8bb0cf', '10', 'b38b2813-afed-44ab-9c0b-ad4223272fee', 'da09a3a6-2439-4ee9-ae63-676929660ef3', '2024-12-30 19:51:02', '2024-12-30 19:51:02', '5c0fc267-4559-4fa0-814f-f1a26e88a506'),
('d9f70b2c-17ce-480d-8126-9c089c5fa858', '11.11', 'b38b2813-afed-44ab-9c0b-ad4223272fee', 'da09a3a6-2439-4ee9-ae63-676929660ef3', '2024-12-30 19:51:26', '2024-12-30 19:51:26', '052b150d-b2a4-4273-a968-189bc4b669af'),
('d0e52f5a-9d86-47e1-8d6f-c8d68e0eda78', '5', '0dea3c3d-fa5d-4ac5-89a5-2e77ff39d4cd', 'da09a3a6-2439-4ee9-ae63-676929660ef3', '2024-12-30 19:58:25', '2024-12-30 19:58:25', 'a9a65de5-93aa-4dc4-83a6-2c644d2a86d8'),
('c87cc37b-dbf6-4f57-814b-c483c74d6d7f', '5', '0dea3c3d-fa5d-4ac5-89a5-2e77ff39d4cd', 'da09a3a6-2439-4ee9-ae63-676929660ef3', '2024-12-30 20:04:04', '2024-12-30 20:04:04', '5b6df119-1f44-4dc8-b574-4e8e625bd008'),
('66c849b8-7ea3-41b7-af15-d1909e7992ba', '5', '0dea3c3d-fa5d-4ac5-89a5-2e77ff39d4cd', 'da09a3a6-2439-4ee9-ae63-676929660ef3', '2024-12-30 19:58:10', '2024-12-30 19:58:10', 'a9a65de5-93aa-4dc4-83a6-2c644d2a86d8'),
('96f55067-535d-4ae5-8601-955556538e52', '10', '0dea3c3d-fa5d-4ac5-89a5-2e77ff39d4cd', 'da09a3a6-2439-4ee9-ae63-676929660ef3', '2024-12-30 19:59:16', '2024-12-30 19:59:16', 'a9a65de5-93aa-4dc4-83a6-2c644d2a86d8'),
('f4161a95-eb64-4edd-aec2-01207a010463', '1.25', '0dea3c3d-fa5d-4ac5-89a5-2e77ff39d4cd', 'da09a3a6-2439-4ee9-ae63-676929660ef3', '2024-12-30 20:04:43', '2024-12-30 20:04:43', '5b6df119-1f44-4dc8-b574-4e8e625bd008');

INSERT INTO juros (id, valor, descricao, created_at, compraId, clienteId) VALUES
('a0f90c74-2b2a-4e01-96b3-d3e094903e39', '1.25', 'Juros referente ao mês de: dezembro 2024', '2024-12-30 20:03:46', '5b6df119-1f44-4dc8-b574-4e8e625bd008', '0dea3c3d-fa5d-4ac5-89a5-2e77ff39d4cd');

INSERT INTO produto (id, nome, descricao, precoAVista, precoAPrazo, created_at, updated_at) VALUES
('a254db09-64b2-4001-b624-2fb41b75edb5', '1 Litro Manteiga Da Terra', 'Caseiro', '3500', '4000', '2024-12-19 10:46:13', '2024-12-19 10:46:53'),
('a60a80ef-2579-4813-8b12-319344b1f678', 'Bacon', 'Perdigão', '3600', '3800', '2024-12-19 10:46:13', '2024-12-19 10:46:58'),
('e8c0904f-37af-4574-b364-5ae1f8886d0c', 'Boi 1ª', 'Bovino', '3600', '4000', '2024-12-19 10:46:13', '2024-12-19 10:47:13'),
('725d77a7-8e49-4462-a4f6-e9a7ccc148bb', 'Fígado Misturado', ' ', '2000', '2300', '2024-12-19 10:46:13', '2024-12-19 10:48:49'),
('f7ea1f0d-78ca-4c2e-88d2-490ee2cfcb9c', 'Boi 3ª', ' ', '3000', '3300', '2024-12-19 10:46:13', '2024-12-19 10:47:38'),
('7f6c1061-9353-4c5e-ae59-b7cebc77d4e9', 'Calabresa', 'Seara', '3300', '3500', '2024-12-19 10:46:13', '2024-12-19 10:47:48'),
('7e50b946-d85d-47e2-80b6-e8d7750617be', 'Carneiro', ' ', '2500', '2800', '2024-12-19 10:46:13', '2024-12-19 10:47:54'),
('a7be3566-8c0c-42ee-95a3-cea49161ffd9', 'Corredor', ' ', '2300', '2500', '2024-12-19 10:46:13', '2024-12-19 10:48:05'),
('f41ad030-f96e-4e94-8714-510ef17afc46', 'Costela', 'Bovina', '2400', '2600', '2024-12-19 10:46:13', '2024-12-19 10:48:12'),
('8201a4c2-553b-4b8f-9298-a73afd2bfbe4', 'Costelinha Com Toicinho', 'Suína', '2400', '2600', '2024-12-19 10:46:13', '2024-12-19 10:48:16'),
('4dd256f5-0d9a-4acc-a9d7-3076e4373ee0', 'Costelinha Sem Toicinho', 'Suína', '2500', '2800', '2024-12-19 10:46:13', '2024-12-19 10:48:19'),
('9aa66d28-ca37-4f83-b2e8-b2bff852dc6b', 'Coxão Mole', 'Bovino', '3800', '4200', '2024-12-19 10:46:13', '2024-12-19 10:48:23'),
('a74ec254-6057-4697-a849-0c7b4a77fb89', 'Coxão Suino', 'Suino', '2000', '2300', '2024-12-19 10:46:13', '2024-12-19 10:48:29'),
('e7164a90-974b-43b0-a232-6888f76a4e26', 'Empanado', 'Perdigão', '300', '400', '2024-12-19 10:46:13', '2024-12-19 10:48:34'),
('d258be90-7ce7-4938-badb-db9cd0af4e89', 'Fígado De Porco', ' ', '1500', '1800', '2024-12-19 10:46:13', '2024-12-19 10:48:41'),
('ceaaf54a-1578-4daa-a12d-6a5242689144', 'Fígado Puro', ' ', '2200', '2400', '2024-12-19 10:46:13', '2024-12-19 10:48:57'),
('bd639439-dc5a-4907-b5de-68db87e0da43', 'Filé De Boi', ' ', '4000', '4500', '2024-12-19 10:46:13', '2024-12-19 10:49:05'),
('c0bfa75f-7166-43b9-934d-cdccc4710104', 'Nata 250g', ' ', '600', '800', '2024-12-19 10:46:13', '2024-12-19 10:51:59'),
('67504986-399c-427e-94d8-738f13f4c2bc', 'Humburguer', 'Perdigão', '300', '300', '2024-12-19 10:46:13', '2024-12-19 10:49:31'),
('0d23b972-d0ff-412f-9a49-86da4330ca6c', 'Lingua De Boi', ' ', '2000', '2500', '2024-12-19 10:46:13', '2024-12-19 10:49:50'),
('9054277e-30c9-455a-9969-191be8501fc3', 'Linguiça Apimentada', 'Laredo', '2500', '3000', '2024-12-19 10:46:13', '2024-12-19 10:49:56'),
('e7418ed3-3f0f-4b9e-854b-fde7b12ef857', 'Linguiça De Frango', 'Aurora', '2200', '2800', '2024-12-19 10:46:13', '2024-12-19 10:50:01'),
('cb0c5977-7c5c-494c-84f1-c15162cf30be', 'Linguiça De Porco', 'Laredo', '2200', '2800', '2024-12-19 10:46:13', '2024-12-19 10:50:06'),
('80fc0d67-4cc5-49c4-b186-8349eb39ec56', 'Linguiça De Porco', 'Aurora', '2200', '2800', '2024-12-19 10:46:13', '2024-12-19 10:50:12'),
('eea3a4d5-acb9-410f-8ee7-cb69dbba8411', 'Mortadela Frango', 'Confiança', '1500', '1800', '2024-12-19 10:46:13', '2024-12-19 10:50:16'),
('2f4ad8ab-da8c-4f1a-b30d-24e39d1963f8', 'Mortadela Frango', 'Perdigão', '1500', '1800', '2024-12-19 10:46:13', '2024-12-19 10:50:27'),
('7ed0e0c1-feed-4a61-83dd-496bb003d9cb', 'Frangogo Promocional (quarta Feira)', ' ', '1199', '1600', '2024-12-19 10:46:13', '2024-12-19 10:51:12'),
('2351ea9d-b403-4901-a312-19153761e990', 'Mortadela Porco', 'Confiança', '1500', '1800', '2024-12-19 10:46:13', '2024-12-19 10:51:49'),
('6fae4aa9-ad87-4646-be62-5e2041a14e54', 'Mortadela Porco', 'Perdigão', '1500', '1800', '2024-12-19 10:46:13', '2024-12-19 10:51:53'),
('25af3d25-0349-4f00-a351-f368f038a814', 'Nata 500g', ' ', '1000', '1200', '2024-12-19 10:46:13', '2024-12-19 10:52:10'),
('0819ecdf-2594-4eea-901b-bd2222228b22', 'Ovo', ' ', '1200', '1500', '2024-12-19 10:46:13', '2024-12-19 10:52:18'),
('4b9e14ef-dc4a-4e8f-a9c5-6eb59aae4ce2', 'Panelada', ' ', '2200', '2500', '2024-12-19 10:46:13', '2024-12-19 10:52:24'),
('57676bfc-355d-4448-b56a-3fa874969222', 'Picadinho', ' ', '3000', '3300', '2024-12-19 10:46:13', '2024-12-19 10:52:29'),
('541f8464-a52d-4e4c-ba01-77caca741ef9', 'Picanha', ' ', '4000', '4500', '2024-12-19 10:46:13', '2024-12-19 10:52:34'),
('cae37430-c6ef-4d02-a601-4e74cc62cb7d', 'Porco Com Toicinho', ' ', '2200', '2400', '2024-12-19 10:46:13', '2024-12-19 10:52:44'),
('fcebea96-dd90-4dd7-aff0-4ac53373091c', 'Porco Sem Toicinho', ' ', '2400', '2600', '2024-12-19 10:46:13', '2024-12-19 10:52:58'),
('71d92617-0c61-4a06-8ed6-c32e7da5146b', 'Queijo', ' ', '3500', '3800', '2024-12-19 10:46:13', '2024-12-19 10:53:11'),
('c6a431ef-e5db-4c2f-8193-f73ab347f7c6', 'Salsicha', 'Perdigão', '1800', '2000', '2024-12-19 10:46:13', '2024-12-19 10:53:29'),
('4db1c30a-515c-48fd-8ab7-35d42250906c', 'Salsicha', 'Estrela', '1400', '1800', '2024-12-19 10:46:13', '2024-12-19 10:53:35'),
('fa15ad4e-db80-42b2-918c-0ee9cef917e6', 'Toicinho De Porco', ' ', '1800', '2000', '2024-12-19 10:46:13', '2024-12-19 10:53:42'),
('36180c7a-95c4-48ea-b612-3f160fc4d94f', 'Tripa De Porco', ' ', '1500', '1700', '2024-12-19 10:46:13', '2024-12-19 10:53:47'),
('0458feb2-60ea-4a89-946f-03b56c5c137d', 'Boi 2ª', 'Bovino', '3300', '3500', '2024-12-19 10:46:13', '2024-12-19 10:58:49'),
('46683873-b64b-4e8b-b55b-40a4263d18f9', 'Frango Diário', ' ', '1500', '2000', '2024-12-19 10:46:13', '2024-12-19 12:36:07'),
('ed009bd6-2bfa-44c7-b410-6c77dabf3e7d', 'Calabresa', 'Perdigão', '3500', '4000', '2024-12-19 10:46:13', '2024-12-20 11:42:57'),
('eee0c1ac-1591-4689-addc-efcea658fb1e', '1 Litro De Mel', 'Caseiro', '3000', '3500', '2024-12-19 10:46:13', '2024-12-26 18:44:32'),
('3b692fff-5888-4754-9179-5010eee1c8d2', 'Teste', 'Teste', '2000', '2000', '2024-12-30 18:22:40', '2024-12-30 18:22:40');

