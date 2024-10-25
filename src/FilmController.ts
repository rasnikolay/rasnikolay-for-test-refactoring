class FilmController {
  openDetails() {
    const popup = new Popup();
    this.popupOpened = true;
  }

  isPopupOpened() {
    return this.popupOpened;
  }
}

/* Вероятно создание экземляра Popup в методее openDetails - плохая практика */