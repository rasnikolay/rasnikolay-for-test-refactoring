function processUserData(user) {
  // Получаем данные пользователя
  const userData = getUserData(user);

  // Проверяем данные пользователя
  if (userData.age >= 18) {
    // Обрабатываем данные
    processUser(user);
  } else {
    // Выводим ошибку
    console.error('User is under 18');
  }
}
