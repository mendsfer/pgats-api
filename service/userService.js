const users = require('../model/userModel');

function registerUser({ username, password, isFavored }) {
  if (!username || !password) {
    return { error: 'Usuário e senha são obrigatórios.' };
  }
  if (users.find(u => u.username === username)) {
    return { error: 'Usuário já existe.' };
  }
  const user = { username, password, isFavored: !!isFavored, balance: 10000 };
  users.push(user);
  return { user };
}

function loginUser({ username, password }) {
  if (!username || !password) {
    return { error: 'Usuário e senha são obrigatórios.' };
  }
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return { error: 'Credenciais inválidas.' };
  }
  return { user };
}

function getAllUsers() {
  return users.map(({ password, ...rest }) => rest);
}

function getUser(username) {
  return users.find(u => u.username === username);
}

module.exports = { registerUser, loginUser, getAllUsers, getUser };
