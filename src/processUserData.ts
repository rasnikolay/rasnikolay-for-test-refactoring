function processUserData(user) {
  // Получаем данные пользователя
  const userData = getUserData(user);

  if (!isGrown(userData.age)) {
    return console.error('User is under 18');
  }

  processUser(user);
}

function isGrown(age: number): boolean {
  return age >= 18;
}

/* Что можно улучшить: вынести логику проверки возраста
*  Улучшено: новая функция, которая используется в processUserData
* */
