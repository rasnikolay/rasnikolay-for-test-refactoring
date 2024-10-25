const match = rawHeaderLine.match(headerPattern);

if (match) {
  headers.set(match[1].toLowerCase(), match[2]);
} else {
  throw new Error('Invalid header format');
}

/* Плохо: загуглил match, он может ничего не вернуть, а значит нужна проверка
   Улучшено: проверка на пустое значение и использование if/else при выбрасывании ошибки, т.к. с тернарником нельзя throw использовать
 */
