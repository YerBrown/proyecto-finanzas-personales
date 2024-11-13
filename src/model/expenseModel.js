const expenses = [
  {
    id: 1,
    amount: 250,
    expense_date: "2023-11-01",
    comment: "Compra semanal",
    expense_type_id: 1,
  },
  {
    id: 2,
    amount: 100,
    expense_date: "2023-11-02",
    comment: "Taxi al trabajo",
    expense_type_id: 2,
  },
  {
    id: 3,
    amount: 1200,
    expense_date: "2023-11-03",
    comment: "Alquiler de noviembre",
    expense_type_id: 3,
  },
  {
    id: 4,
    amount: 300,
    expense_date: "2023-11-04",
    comment: "Visita médica",
    expense_type_id: 4,
  },
  {
    id: 5,
    amount: 800,
    expense_date: "2023-11-05",
    comment: "Matrícula escolar",
    expense_type_id: 5,
  },
  {
    id: 6,
    amount: 150,
    expense_date: "2023-11-06",
    comment: "Cine y cena",
    expense_type_id: 6,
  },
  {
    id: 7,
    amount: 230,
    expense_date: "2023-11-07",
    comment: "Supermercado",
    expense_type_id: 1,
  },
  {
    id: 8,
    amount: 90,
    expense_date: "2023-11-08",
    comment: "Transporte público",
    expense_type_id: 2,
  },
  {
    id: 9,
    amount: 400,
    expense_date: "2023-11-09",
    comment: "Factura de electricidad",
    expense_type_id: 3,
  },
  {
    id: 10,
    amount: 50,
    expense_date: "2023-11-10",
    comment: "Medicinas",
    expense_type_id: 4,
  },
  {
    id: 11,
    amount: 200,
    expense_date: "2023-11-11",
    comment: "Libros y útiles",
    expense_type_id: 5,
  },
  {
    id: 12,
    amount: 180,
    expense_date: "2023-11-12",
    comment: "Concierto",
    expense_type_id: 6,
  },
  {
    id: 13,
    amount: 260,
    expense_date: "2023-11-13",
    comment: "Mercado orgánico",
    expense_type_id: 1,
  },
  {
    id: 14,
    amount: 110,
    expense_date: "2023-11-14",
    comment: "Peaje y gasolina",
    expense_type_id: 2,
  },
  {
    id: 15,
    amount: 1300,
    expense_date: "2023-11-15",
    comment: "Renta de diciembre",
    expense_type_id: 3,
  },
  {
    id: 16,
    amount: 250,
    expense_date: "2023-11-16",
    comment: "Cobertura dental",
    expense_type_id: 4,
  },
  {
    id: 17,
    amount: 750,
    expense_date: "2023-11-17",
    comment: "Curso en línea",
    expense_type_id: 5,
  },
  {
    id: 18,
    amount: 125,
    expense_date: "2023-11-18",
    comment: "Teatro local",
    expense_type_id: 6,
  },
  {
    id: 19,
    amount: 210,
    expense_date: "2023-11-19",
    comment: "Restaurante familiar",
    expense_type_id: 1,
  },
  {
    id: 20,
    amount: 80,
    expense_date: "2023-11-20",
    comment: "Uber",
    expense_type_id: 2,
  },
];
const expense_types = [
  { id: 1, name: "Alimentos" },
  { id: 2, name: "Transporte" },
  { id: 3, name: "Vivienda" },
  { id: 4, name: "Salud" },
  { id: 5, name: "Educación" },
  { id: 6, name: "Entretenimiento" },
];
let LAST_ID = users.length;

function getAllExpenses() {
  return expenses;
}
function getAllExpenseTypes() {
  return expenses;
}
function getById(id) {
  const obtainedUser = users.find((user) => user.id == id);
  return obtainedUser;
}

function create(newUser) {
  newUser.id = ++LAST_ID;
  users.push(newUser);
  return newUser;
}

function update(id, data) {
  const user = getById(id);
  const updatedUser = { ...user, ...data };
  const index = users.findIndex((element) => element.id == id);
  users.splice(index, 1, updatedUser);
  return updatedUser;
}

function remove(id) {
  const userRemoved = getById(id);
  userRemoved.active = 0;
  return userRemoved;
}

export const functions = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default functions;
