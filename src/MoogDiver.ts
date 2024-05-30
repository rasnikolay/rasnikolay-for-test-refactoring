class MoogDiver {
  gradient: Gradient;
  splines: List<Spline>;

  public dive(reason: string) {
    saturateGradient();

    reticulateSplines();

    diveForMoog(reason);
  }

  private saturateGradient() {
    this.gradient = // somoe logic
  }

  private reticulateSplines() {
    // some logic
    this.splines = this.gradient.getSplines();
  }

  private diveForMoog(reason: string) {
    // some logic
    
    if(reason === 'ok'){
      this.splines.doOk();
    } else {
      this.splines.doNotOk();
    }
  }
}
