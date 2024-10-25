const createPayment = (isToken: Boolean) => {
  if (isToken) {
    const token = getUrl().slice();
    system.createTransaction(token).setTransaction();
  } else {
    const cardNumber = account.getCardNumber();
    userAccount.createCardPayment(cardNumber).postTransactionToServer();
  }
};

/* Плохо: возможно, читаемость кода

   Что можно улучшить: переписать на тернарник, но тогда константы будут излишни
 */
