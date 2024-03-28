const createPayment = (isToken: Boolean) => {
  if (isToken) {
    const token = getUrl().slice();
    system.createTransaction(token).setTransaction();
  } else {
    const cardNumber = account.getCardNumber();
    userAccount.createCardPayment(cardNumber).postTransactionToServer();
  }
};
