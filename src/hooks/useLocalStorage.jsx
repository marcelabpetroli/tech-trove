import React, { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      const { data } = JSON.parse(storedValue);

      const expirationTime = 1000 * 60 * 60;
      const now = Date.now();
      const setupTime = localStorage.getItem("setupTime");

      if (setupTime === null) {
        localStorage.setItem("setupTime", now);
      } else if (now - parseInt(setupTime) > expirationTime) {
        localStorage.removeItem(key);
        localStorage.setItem("setupTime", now);
      } else {
        return data;
      }
    }

    return initialValue;
  });

  useEffect(() => {
    const dataToStore = { data: value, timestamp: Date.now() };
    localStorage.setItem(key, JSON.stringify(dataToStore));
  }, [key, value]);

  return [value, setValue];
};
