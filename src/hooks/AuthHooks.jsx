let useAuth = () => {
  let getLS = (key) => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : [];
  };

  let setLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return {
    getLS,
    setLS,
  };
};

export default useAuth;
