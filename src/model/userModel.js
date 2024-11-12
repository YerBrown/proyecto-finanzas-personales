const users = [
  {
    id: 1,
    username: "juanperez",
    email: "juanperez@example.com",
    password: "securepassword123",
    create_time: "2023-11-12T12:00:00Z",
    rol: "client",
    active: 1,
  },
  {
    id: 2,
    username: "anamartinez",
    email: "anamartinez@example.com",
    password: "mypassword321",
    create_time: "2023-11-12T13:00:00Z",
    rol: "admin",
    active: 0,
  },
  {
    id: 3,
    username: "robertosmith",
    email: "robertosmith@example.com",
    password: "123456abc",
    create_time: "2023-11-12T14:30:00Z",
    rol: "client",
    active: 1,
  },
  {
    id: 4,
    username: "lauragomez",
    email: "lauragomez@example.com",
    password: "password789",
    create_time: "2023-11-12T15:15:00Z",
    rol: "admin",
    active: 1,
  },
  {
    id: 5,
    username: "carlossanchez",
    email: "carlossanchez@example.com",
    password: "mypass456",
    create_time: "2023-11-12T16:00:00Z",
    rol: "client",
    active: 0,
  },
];

let LAST_ID = users.length;

function getAll() {
  return users;
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
