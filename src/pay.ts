const pay = () => {
  for (let e of employees) {
    if (e.isPayday()) {
      const pay = e.calculatePay();

      e.deliverPay(pay);
    }
  }
};

/* Вроде неплохо, при желании можно проверку if заменить на filter, но это может усложнить код */