# 💸 PocketLog

PocketLog es una aplicación web de gestión financiera personal que permite a los usuarios llevar un control preciso de sus ingresos y gastos. La plataforma proporciona herramientas intuitivas para registrar transacciones, organizar las finanzas por categorías y generar reportes visuales, ayudando a los usuarios a administrar su dinero de manera eficiente y planificar mejor su futuro financiero.

## 📋 Tabla de Contenidos

1. [Características](#-características)
2. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
3. [Instalación](#-instalación)
4. [Uso](#-uso)
5. [Endpoints](#-endpoints)
6. [Pruebas](#-pruebas)
7. [Colaboradores](#-colaboradores)

## 🌟 Características
- Registro y autenticación de usuarios.
- Añadir, editar y eliminar ingresos y gastos.
- Visualización de gráficos financieros.
- Resúmenes de ingresos y gastos por periodos de tiempo.
## 🛠️ Tecnologías Utilizadas
- Frontend: 
- Backend: Node.js | Express.js | MongoDB
- Autenticación: 
## ⚙️ Instalación
1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/YerBrown/proyecto-finanzas-personales
2. **Instala las dependencias**:

   ```bash
   npm install

3. **Crear archivo .env**

   Añadir variables de entorno
   - PORT=3000 
   - SECRET=clave_secreta (clave para cifrar la cookie)
   - DB_HOST=localhost 
   - DB_USER=root
   - DB_PASSWORD=1234
   - DB_NAME=Proyecto_Finanzas
   - DB_DIALECT=mysql
   - DB_PORT=3308

4. **Crear el contenedor de docker**:

   Entra en la carpeta del proyecto y usa este comando para crear el contenedor

   ```bash
   docker-compose up
5. **Inicia el proyecto**

    ```bash
   npm start
## 🚀 Uso
- Logearte con tu usuario o registrarte 
- Ventana de gastos y ingresos, donde puedes ver todas tus transacciones, puedes verlas por mes o por año. Tambien puedes ver cual es tu balance de ahorro.
   - Añade la cantidad, la fecha de la transaccion, su categoria, el titulo que quieras y un commentario (opcional) para completar el formulario y enviar los datos.
- Seccion de gastos y ingresos por categoria, donde podras ver un resumen de cuanto porcetage gastas y ingresas en segun que cosas.
- Añadir, editar o eliminar gastos y ingresos
- Ventana de administrador donde podras ver todos los usuarios que hay registrados en nuestra base de datos

## 📌 Endpoints
Texto de la sección...

## 🧪 Pruebas
Texto de la sección...

## 👥 Colaboradores

[![GitHub](https://img.shields.io/badge/GitHub-@kareaga95-blue?style=flat-square&logo=github)](https://github.com/kareaga95)
[![GitHub](https://img.shields.io/badge/GitHub-@JorgePascualFuentecilla-blue?style=flat-square&logo=github)](https://github.com/JorgePascualFuentecilla)
[![GitHub](https://img.shields.io/badge/GitHub-@4n7n-blue?style=flat-square&logo=github)](https://github.com/4n7n)
[![GitHub](https://img.shields.io/badge/GitHub-@YerBrown-blue?style=flat-square&logo=github)](https://github.com/YerBrown)