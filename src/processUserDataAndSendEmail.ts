function processUserData(user: User) {
  user.processData();
  sendUserEmail(user);
}

function sendUserEmail(user: User) {
  emailService.sendEmail(user.email, 'Данные обработаны успешно');
}

/* Улучшено: разделена логика функций*/
