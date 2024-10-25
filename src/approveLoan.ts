if (
  user.age >= 18 &&
  user.age <= 65 &&
  user.employmentStatus === 'employed' &&
  user.criminalRecord === false
) {
  approveLoan();
}



/* Что можно улучшить: Тут в принципе неплохо, наверное))) В зависимости от соглашения внутри команды

  Как можно сделать:
  age >= 18 && age <= 65 && employmentStatus === 'employed' && !criminalRecord;
  Так читается в принципе тоже неплохо. И проверку на false можно заменить на оператор логического не "!"
 */