import { useState, useEffect } from 'react';

export function getSessionStorage<T extends Object>(key: string): T {
    const stored = sessionStorage.getItem(key);

    return JSON.parse(stored);
  }

export function getSessionStorageOrDefault<T extends Object>(key: string, defaultValue: T): T {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

export function setSessionStorage<T extends Object>(key: string, value: T) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export default function useSessionStorage<T extends Object>(key: string, defaultValue: T) {
  const [value, setValue] = useState(
    getSessionStorageOrDefault(key, defaultValue)
  );

  useEffect(() => {
    setSessionStorage(key, value);
  }, [key, value]);

  return [value, setValue];
}