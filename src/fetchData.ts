const DEFAULT_TIMEOUT = 5000;

function fetchData(url: string, timeout:number = DEFAULT_TIMEOUT_MS) {
  // Используем значение по умолчанию для таймаута
  fetch(url, { timeout })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

/* Что можно улучшить: значение по умолчанию в аргументе функции  fetchData
   Улучшено: timeout = DEFAULT_TIMEOUT_MS
 */