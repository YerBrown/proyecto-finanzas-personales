USE Proyecto_Finanzas;


INSERT INTO user (username,email,password, rol) VALUES
('john_doe', 'john@example.com', 'password123', 'client'),
('jane_smith', 'jane@example.com', 'securePass456', 'client'),
('maria_gonzalez', 'maria@example.com', 'mariaPass789', 'client'),
('alex_taylor', 'alex@example.com', 'alex1234', 'client'),
('chris_lee', 'chris@example.com', 'chris789', 'client'),
('linda_williams', 'linda@example.com', 'lindaPass987', 'client'),
('mark_jones', 'mark@example.com', 'markPass123', 'client'),
('emily_clark', 'emily@example.com', 'emilyPassword', 'client'),
('sarah_adams', 'sarah@example.com', 'sarahSecure', 'client'),
('david_white', 'david@example.com', 'davidSecret', 'client');

INSERT INTO income_type (name) VALUES
('Salario'),
('Bonificacion'),
('Ingresos Freelance'),
('Renta de Propiedades'),
('Intereses Bancarios'),
('Regalos en Efectivo'),
('Dividendo de Acciones'),
('Reembolsos'),
('Venta de objetos de segunda mano'),
('Bizum');


INSERT INTO expense_type (name) VALUES
('Renta'),
('Compra'),
('Transporte'),
('Ocio'),
('Entretenimiento'),
('Gastos Médicos'),
('Educación'),
('Ropa y Accesorios'),
('Regalos'),
('Suscripciones y Membresías');

INSERT INTO income (amount, title, comment, datetime, type_id, user_id) VALUES
(300000, 'Salario Mensual', 'Salario correspondiente al mes de noviembre', '2024-11-01 09:00:00', 1, 1),
(50000, 'Bonificación Anual', 'Bono por desempeño excelente', '2024-11-05 12:30:00', 2, 1),
(150000, 'Ingresos Freelance', 'Pago por proyecto de desarrollo web', '2024-11-10 14:00:00', 3, 1),
(80000, 'Renta de Propiedad', 'Ingreso por alquiler de apartamento', '2024-11-15 10:15:00', 4, 1),
(10000, 'Intereses Bancarios', 'Intereses generados por cuenta de ahorro', '2024-11-20 11:00:00', 5, 1),

(250000, 'Salario Mensual', 'Pago mensual del trabajo', '2024-11-02 08:30:00', 1, 2),
(20000, 'Bonificación Especial', 'Bono por alcanzar objetivos', '2024-11-06 16:45:00', 2, 2),
(120000, 'Ingresos Freelance', 'Diseño gráfico para cliente internacional', '2024-11-11 18:30:00', 3, 2),
(70000, 'Renta de Propiedad', 'Alquiler de local comercial', '2024-11-16 09:30:00', 4, 2),
(5000, 'Intereses Bancarios', 'Intereses de cuenta de inversión', '2024-11-21 13:15:00', 5, 2),

(280000, 'Salario de Noviembre', 'Pago mensual recibido', '2024-11-03 10:00:00', 1, 3),
(30000, 'Bonificación de Fin de Año', 'Bono adicional por rendimiento', '2024-11-07 15:30:00', 2, 3),
(110000, 'Ingresos Freelance', 'Consultoría para empresa de marketing', '2024-11-12 20:45:00', 3, 3),
(85000, 'Renta de Propiedad', 'Pago por alquiler de casa de campo', '2024-11-17 08:45:00', 4, 3),
(8000, 'Intereses Bancarios', 'Intereses ganados por depósitos', '2024-11-22 10:30:00', 5, 3),

(270000, 'Salario Mensual', 'Pago por trabajo realizado', '2024-11-04 11:00:00', 1, 4),
(40000, 'Bonificación por Proyectos', 'Bono por finalización de proyectos', '2024-11-08 17:00:00', 2, 4),
(90000, 'Ingresos Freelance', 'Escritura de artículos para una revista', '2024-11-13 19:15:00', 3, 4),
(65000, 'Renta de Propiedad', 'Ingreso de alquiler de garaje', '2024-11-18 07:30:00', 4, 4),
(12000, 'Intereses Bancarios', 'Intereses por inversiones a plazo', '2024-11-23 12:45:00', 5, 4),

(320000, 'Salario de Diciembre', 'Pago mensual habitual', '2024-11-05 09:30:00', 1, 5),
(35000, 'Bonificación por Ventas', 'Bono recibido por alcanzar metas de ventas', '2024-11-09 13:45:00', 2, 5),
(140000, 'Ingresos Freelance', 'Desarrollo de una aplicación móvil', '2024-11-14 21:00:00', 3, 5),
(75000, 'Renta de Propiedad', 'Alquiler de oficina en el centro', '2024-11-19 08:00:00', 4, 5),
(15000, 'Intereses Bancarios', 'Ganancias de cuenta de ahorro', '2024-11-24 11:15:00', 5, 5),

(230000, 'Salario de Noviembre', 'Pago mensual del trabajo', '2024-11-06 10:00:00', 1, 6),
(25000, 'Bonificación por Productividad', 'Bono por productividad excepcional', '2024-11-10 14:30:00', 2, 6),
(130000, 'Ingresos Freelance', 'Redacción de contenido web', '2024-11-15 18:00:00', 3, 6),
(90000, 'Renta de Propiedad', 'Ingreso por alquilar un terreno', '2024-11-20 09:45:00', 4, 6),
(7000, 'Intereses Bancarios', 'Intereses obtenidos de cuenta corriente', '2024-11-25 13:00:00', 5, 6),

(310000, 'Salario Mensual', 'Ingreso mensual por empleo', '2024-11-07 08:00:00', 1, 7),
(55000, 'Bonificación de Navidad', 'Bono de fin de año por desempeño', '2024-11-11 16:00:00', 2, 7),
(90000, 'Ingresos Freelance', 'Diseño de logotipo para empresa', '2024-11-16 20:30:00', 3, 7),
(78000, 'Renta de Propiedad', 'Pago mensual por alquiler de cabaña', '2024-11-21 10:30:00', 4, 7),
(6000, 'Intereses Bancarios', 'Intereses de cuenta a plazo fijo', '2024-11-26 12:00:00', 5, 7),

(260000, 'Salario Mensual', 'Ingreso por trabajo de noviembre', '2024-11-08 09:15:00', 1, 8),
(45000, 'Bonificación por Proyecto', 'Bono recibido por completar un gran proyecto', '2024-11-12 15:15:00', 2, 8),
(100000, 'Ingresos Freelance', 'Diseño de una página web', '2024-11-17 19:45:00', 3, 8),
(85000, 'Renta de Propiedad', 'Alquiler de un espacio comercial', '2024-11-22 08:30:00', 4, 8),
(8000, 'Intereses Bancarios', 'Ganancias por inversiones financieras', '2024-11-27 14:00:00', 5, 8),

(295000, 'Salario Mensual', 'Salario habitual del mes', '2024-11-09 10:30:00', 1, 9),
(30000, 'Bonificación por Asistencia', 'Bono por asistencia perfecta', '2024-11-13 13:00:00', 2, 9),
(125000, 'Ingresos Freelance', 'Proyecto de consultoría empresarial', '2024-11-18 21:15:00', 3, 9),
(80000, 'Renta de Propiedad', 'Ingreso por alquiler de local', '2024-11-23 09:00:00', 4, 9),
(15000, 'Intereses Bancarios', 'Intereses de cuenta de ahorro', '2024-11-28 11:30:00', 5, 9),

(280000, 'Salario Mensual', 'Pago mensual correspondiente', '2024-11-10 11:30:00', 1, 10),
(40000, 'Bonificación Anual', 'Bono anual por desempeño', '2024-11-14 17:30:00', 2, 10),
(110000, 'Ingresos Freelance', 'Desarrollo de una campaña de marketing', '2024-11-19 20:45:00', 3, 10),
(95000, 'Renta de Propiedad', 'Pago por alquiler de terreno', '2024-11-24 08:15:00', 4, 10),
(12000, 'Intereses Bancarios', 'Ganancias por depósitos a plazo', '2024-11-29 13:45:00', 5, 10);

INSERT INTO `expense` (amount, title, comment, datetime, type_id, user_id) VALUES
(-120000, 'Pago de Renta', 'Renta mensual del apartamento', '2024-11-01 08:00:00', 1, 1),
(-25000, 'Compra de Supermercado', 'Compra semanal de alimentos y productos básicos', '2024-11-03 10:15:00', 2, 1),
(-5000, 'Pasaje de Autobús', 'Viaje diario al trabajo', '2024-11-04 07:30:00', 3, 1),
(-10000, 'Salida a Cine', 'Salida al cine con amigos', '2024-11-05 19:00:00', 4, 1),
(-15000, 'Suscripción a Netflix', 'Pago mensual de la suscripción a Netflix', '2024-11-06 21:00:00', 10, 1),

(-80000, 'Pago de Renta', 'Renta de oficina', '2024-11-07 09:00:00', 1, 2),
(-35000, 'Compra de Comida', 'Cena especial para un evento familiar', '2024-11-08 20:00:00', 2, 2),
(-4000, 'Taxi al Aeropuerto', 'Viaje en taxi para un vuelo', '2024-11-09 06:30:00', 3, 2),
(-20000, 'Concierto', 'Entrada para un concierto de rock', '2024-11-10 18:00:00', 5, 2),
(-12000, 'Gimnasio Mensual', 'Membresía mensual al gimnasio', '2024-11-11 08:00:00', 10, 2),

(-95000, 'Renta de Casa', 'Pago mensual de la casa', '2024-11-12 08:30:00', 1, 3),
(-27000, 'Supermercado', 'Compra de alimentos para la semana', '2024-11-13 11:00:00', 2, 3),
(-3000, 'Billete de Metro', 'Viaje en metro al trabajo', '2024-11-14 07:45:00', 3, 3),
(-15000, 'Salida a Restaurante', 'Cena con amigos', '2024-11-15 19:30:00', 4, 3),
(-8000, 'Suscripción a Spotify', 'Pago mensual por música', '2024-11-16 21:15:00', 10, 3),

(-110000, 'Renta de Apartamento', 'Alquiler del apartamento', '2024-11-17 09:15:00', 1, 4),
(-24000, 'Compra en Tienda', 'Compra de ropa para el invierno', '2024-11-18 14:00:00', 8, 4),
(-4500, 'Transporte en Bus', 'Viaje en bus al centro', '2024-11-19 08:00:00', 3, 4),
(-30000, 'Show de Comedia', 'Entradas para un show de comedia', '2024-11-20 20:30:00', 5, 4),
(-2000, 'Revista Mensual', 'Suscripción a una revista de moda', '2024-11-21 09:30:00', 10, 4),

(-105000, 'Renta de Piso', 'Renta del piso del mes', '2024-11-22 10:00:00', 1, 5),
(-31000, 'Compra de Alimentos', 'Compra en supermercado para toda la familia', '2024-11-23 12:30:00', 2, 5),
(-3500, 'Uber', 'Viaje en Uber al hospital', '2024-11-24 08:15:00', 3, 5),
(-17000, 'Parque de Diversiones', 'Día en el parque de diversiones', '2024-11-25 14:00:00', 5, 5),
(-7000, 'Revista de Cocina', 'Suscripción a una revista de cocina', '2024-11-26 18:45:00', 10, 5),

(-88000, 'Renta del Mes', 'Pago de renta del mes de noviembre', '2024-11-27 11:00:00', 1, 6),
(-27000, 'Supermercado', 'Compra semanal en el supermercado', '2024-11-28 09:30:00', 2, 6),
(-6000, 'Transporte', 'Pasaje de tren para visitar a la familia', '2024-11-29 07:00:00', 3, 6),
(-12500, 'Cine y Palomitas', 'Película en el cine con amigos', '2024-11-30 19:45:00', 4, 6),
(-5000, 'Suscripción a Amazon Prime', 'Pago mensual de Amazon Prime', '2024-12-01 21:00:00', 10, 6),

(-112000, 'Renta de la Casa', 'Pago de renta de la casa', '2024-12-02 08:00:00', 1, 7),
(-22000, 'Compra de Ropa', 'Abrigo nuevo para el invierno', '2024-12-03 13:00:00', 8, 7),
(-8000, 'Taxi a la Oficina', 'Viaje en taxi por la mañana', '2024-12-04 07:30:00', 3, 7),
(-25000, 'Concierto de Jazz', 'Entradas para un concierto de jazz', '2024-12-05 20:00:00', 5, 7),
(-1500, 'Revista de Ciencia', 'Suscripción a una revista de ciencia', '2024-12-06 10:00:00', 10, 7),

(-98000, 'Alquiler Mensual', 'Alquiler mensual de la vivienda', '2024-12-07 09:45:00', 1, 8),
(-29000, 'Mercado', 'Compra de frutas y verduras frescas', '2024-12-08 11:30:00', 2, 8),
(-5500, 'Bus al Centro', 'Viaje en bus al centro de la ciudad', '2024-12-09 08:15:00', 3, 8),
(-8000, 'Café y Postre', 'Tarde de café con un amigo', '2024-12-10 16:00:00', 4, 8),
(-10000, 'Membresía de Gimnasio', 'Pago mensual de membresía', '2024-12-11 19:00:00', 10, 8),

(-102000, 'Renta del Hogar', 'Renta mensual del hogar', '2024-12-12 08:30:00', 1, 9),
(-28000, 'Supermercado', 'Compra de alimentos para el mes', '2024-12-13 12:00:00', 2, 9),
(-4000, 'Taxi al Centro Médico', 'Taxi para una cita médica', '2024-12-14 07:45:00', 3, 9),
(-13000, 'Noche de Stand-up Comedy', 'Show de comedia en vivo', '2024-12-15 21:00:00', 5, 9),
(-4500, 'Suscripción a Disney+', 'Pago mensual de Disney+', '2024-12-16 09:00:00', 10, 9),

(-110000, 'Pago de Renta', 'Renta del apartamento', '2024-12-17 10:15:00', 1, 10),
(-26000, 'Compra Semanal', 'Compra de alimentos y artículos para el hogar', '2024-12-18 09:30:00', 2, 10),
(-3000, 'Pasaje de Tren', 'Viaje en tren al trabajo', '2024-12-19 06:45:00', 3, 10),
(-9000, 'Película en Casa', 'Compra de una película en streaming', '2024-12-20 19:15:00', 5, 10),
(-3500, 'Revista de Negocios', 'Suscripción a una revista de negocios', '2024-12-21 18:00:00', 10, 10);