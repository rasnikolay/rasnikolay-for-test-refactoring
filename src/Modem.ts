interface Modem {
  dial: (phoneNumber: string) => boolean;
  disconnect: () => boolean;
  send: (c: string) => boolean;
  recv: () => string;
  getConnectedPhoneNumber: () => string;
}
