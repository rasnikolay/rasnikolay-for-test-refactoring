const updateUserData = (url, data) => {
  if (!isLoggedIn()) {
    toLoginPage();
    return;
  }

  const token = getToken();
  const headers = getHeaders(token);

  return fetch(`${domain}/v1/users/${url}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data),
  });
};

/* Плохо: дублирование логики
   Улучшено: один метод
*  */