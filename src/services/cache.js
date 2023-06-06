const checkCacheExpiration = (key) => {
  const storedValue = localStorage.getItem(key);

  if (storedValue) {
    const { timestamp } = JSON.parse(storedValue);

    const expirationTime = 1000 * 60 * 60;
    const now = Date.now();

    if (now - timestamp > expirationTime) {
      localStorage.removeItem(key);
      return null;
    }
  }

  return storedValue;
};

const updateCache = (key, data) => {
  const dataToStore = { data, timestamp: Date.now() };
  localStorage.setItem(key, JSON.stringify(dataToStore));
};

export { checkCacheExpiration, updateCache };
