class Car2 {
  public static readonly COLORS = ['red', 'blue', 'green'];

  public static isColorAvailable(color: string): boolean {
    return this.COLORS.includes(color);
  }
}
