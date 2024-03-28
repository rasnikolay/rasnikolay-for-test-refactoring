const updateUserHandle = (handle) => {
  if (!isLoggedIn()) {
    toLoginPage();

    return;
  }

  const token = getToken();
  const headers = getHeaders(token);

  return fetch(`${domain}/v1/users/handle`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      handle,
    }),
  });
};

const updateUserInterests = (interestUUIDs) => {
  if (!isLoggedIn()) {
    toLoginPage();

    return;
  }

  const token = getToken();
  const headers = getHeaders(token);

  return fetch(`${domain}/v1/users/interests`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      interestUUIDs,
    }),
  });
};
