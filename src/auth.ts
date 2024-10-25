type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService): TPayment => {
  const rcCode = gateway.sendAuth(payment);

  return {...payment, rcCode}
};

/* Плохо: мутирование payment

  Улучшено: для auth вернуть ожидаемый тип данных TPayment и возвращать новый обьект
  Так же мне нравится, что типы начинаются с буквы T
 */