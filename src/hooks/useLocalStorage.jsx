import React, { useState, useEffect } from "react";
import { checkCacheExpiration, updateCache } from "../services/cache";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const cachedValue = checkCacheExpiration(key);

    if (cachedValue !== null) {
      const { data } = JSON.parse(cachedValue);

      return data;
    }

    return initialValue;
  });

  useEffect(() => {
    updateCache(key, value);
  }, [key, value]);

  return [value, setValue];
};
