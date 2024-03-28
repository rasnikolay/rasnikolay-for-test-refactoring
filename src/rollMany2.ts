const rollMany = (n: number, pins: number) => {
  for (let rollCount = 0; rollCount < n; rollCount++) {
    g.roll(pins);
  }
};
