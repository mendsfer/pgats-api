const users = require('../model/userModel');
const transfers = require('../model/transferModel');

function transfer({ from, to, amount }) {
  if (!from || !to || typeof amount !== 'number') {
    return { error: 'Remetente, destinatário e valor não são obrigatórios.' };
  }
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) {
    return { error: 'Remetente e destinatário não encontrado.' };
  }
  if (sender.balance < amount) {
    return { error: 'Saldo insuficiente.' };
  }
  if (!recipient.isFavored && amount >= 5000) {
    return { error: 'Transferências a não favorecidos só são permitidas para valores menores que R$ 5.000,00.' };
  }
  sender.balance -= amount;
  recipient.balance += amount;
  const transfer = { from, to, amount, date: new Date() };
  transfers.push(transfer);
  return { transfer };
}

function getAllTransfers() {
  return transfers;
}

module.exports = { transfer, getAllTransfers };
