const pay = () => {
  for (let e of employees) {
    if (e.isPayday()) {
      const pay = e.calculatePay();

      e.deliverPay(pay);
    }
  }
};
