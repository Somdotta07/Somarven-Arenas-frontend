const getToken = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return token;
};

const clearSession = () => {
  localStorage.setItem('session-status', false);
  localStorage.removeItem('token');
};

export { getToken, clearSession };
