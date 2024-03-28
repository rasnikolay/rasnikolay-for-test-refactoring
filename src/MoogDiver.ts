class MoogDiver {
  gradient: Gradient;
  splines: List<Spline>;

  public dive(reason: string) {
    saturateGradient();

    reticulateSplines();

    diveForMoog(reason);
  }
}
