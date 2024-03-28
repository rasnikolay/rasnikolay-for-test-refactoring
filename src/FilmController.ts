class FilmController {
  openDetails() {
    const popup = new Popup();
    this.popupOpened = true;
  }

  isPopupOpened() {
    return this.popupOpened;
  }
}
