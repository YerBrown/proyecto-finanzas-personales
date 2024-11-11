USE `Proyecto_Finanzas`;

-- Insertar datos en la tabla `user`
INSERT INTO `user` (username, email, password, rol, active)
VALUES 
    ('juanperez', 'juan.perez@example.com', 'juanpass123', 'client', 1),
    ('adminlaura', 'laura.admin@example.com', 'secureadmin', 'admin', 1),
    ('marialopez', 'maria.lopez@example.com', 'mariapass456', 'client', 1),
    ('pedrogarcia', 'pedro.garcia@example.com', 'pedropass789', 'client', 1),
    ('admincarlos', 'carlos.admin@example.com', 'admin1234', 'admin', 1),
    ('claudiasanchez', 'claudia.sanchez@example.com', 'claudiapass', 'client', 1),
    ('felipemartin', 'felipe.martin@example.com', 'felipepass', 'client', 1),
    ('angelarodriguez', 'angela.rodriguez@example.com', 'angelapass', 'client', 1),
    ('raulfernandez', 'raul.fernandez@example.com', 'raulpass', 'client', 1);

-- Insertar datos en la tabla `income_type`
INSERT INTO `income_type` (name)
VALUES 
    ('Salario'),
    ('Inversiones'),
    ('Regalos'),
    ('Freelance'),
    ('Alquileres'),
    ('Intereses bancarios'),
    ('Dividendo de acciones'),
    ('Ventas'),
    ('Premio');

-- Insertar datos en la tabla `income`
INSERT INTO `income` (amount, income_date, coment, income_type_id, user_id)
VALUES 
    (180000, '2024-11-01 08:30:00', 'Salario mensual de Juan', 1, 1),
    (15000, '2024-11-05 15:00:00', 'Intereses de cuenta de ahorro', 6, 1),
    (250000, '2024-11-10 09:00:00', 'Salario mensual de María', 1, 3),
    (40000, '2024-11-15 12:30:00', 'Pago freelance diseño web', 4, 2),
    (120000, '2024-11-20 10:00:00', 'Ingreso por alquiler de propiedad', 5, 4),
    (30000, '2024-11-25 08:45:00', 'Venta de bicicleta usada', 8, 6),
    (5000, '2024-11-28 16:00:00', 'Premio en sorteo', 9, 8),
    (180000, '2024-11-28 08:00:00', 'Salario mensual de Claudia', 1, 6),
    (45000, '2024-11-29 13:15:00', 'Consultoría freelance', 4, 9);

-- Insertar datos en la tabla `expense_type`
INSERT INTO `expense_type` (name)
VALUES 
    ('Alquiler'),
    ('Transporte'),
    ('Comida'),
    ('Servicios públicos'),
    ('Educación'),
    ('Entretenimiento'),
    ('Salud'),
    ('Deudas'),
    ('Ahorros');

-- Insertar datos en la tabla `expense`
INSERT INTO `expense` (amount, expense_date, coment, id_type, expense_type_id, user_id)
VALUES 
    (75000, '2024-11-01 10:00:00', 'Pago del alquiler mensual', 1, 1, 1),
    (6000, '2024-11-03 12:15:00', 'Gasolina para el auto', 2, 2, 3),
    (20000, '2024-11-07 18:45:00', 'Compra de supermercado', 3, 3, 1),
    (12000, '2024-11-08 09:30:00', 'Factura de electricidad y agua', 4, 4, 4),
    (10000, '2024-11-10 14:30:00', 'Curso online de programación', 5, 5, 2),
    (8000, '2024-11-12 19:00:00', 'Cena en restaurante', 6, 6, 6),
    (9000, '2024-11-15 11:00:00', 'Consulta médica', 7, 7, 5),
    (30000, '2024-11-18 10:30:00', 'Pago de tarjeta de crédito', 8, 8, 9),
    (50000, '2024-11-20 09:00:00', 'Ahorro mensual en cuenta', 9, 9, 1),
    (70000, '2024-11-25 08:30:00', 'Pago del alquiler de diciembre', 1, 1, 3),
    (5500, '2024-11-26 13:45:00', 'Transporte público', 2, 2, 7),
    (17500, '2024-11-27 17:00:00', 'Compra de supermercado', 3, 3, 8);