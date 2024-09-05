type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService) => {
  const rcCode = gateway.sendAuth(payment);

  payment.rcCode = rcCode;
};
