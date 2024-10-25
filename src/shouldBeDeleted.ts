const isShouldDeleteTimer = () => timer.hasExpired() && !timer.isRecurrent();

if (isShouldDeleteTimer()) {
  //и затем логика
}

/* можно создать функцию shouldDeleteTimer относящуюся к названию документа */