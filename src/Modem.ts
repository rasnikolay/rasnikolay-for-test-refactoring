interface IModem {
  dial: (phoneNumber: string) => boolean;
  disconnect: () => boolean;
  send: (c: string) => boolean;
  recv: () => string;
  getConnectedPhoneNumber: () => string;
}

/* Что может быть плохо: слишком много методов в одном месте
   Улучшено: I в начале для interface
 */