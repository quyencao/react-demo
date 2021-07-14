export const localStorageHelper = {
  setItem: (key: string, value: any) => {
    let valueStringify = value;
    if (typeof value === 'object') {
      valueStringify = JSON.stringify(value);
    }
    localStorage.setItem(key, valueStringify);
  },
  getItem: (key: string, options?: { isObject: boolean }) => {
    const value = localStorage.getItem(key);
    if (value && options?.isObject) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
    return value;
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
  // TODO: check token expired
  isLogin: () => {
    return !!localStorageHelper.getItem(
      process.env.REACT_APP_ACCESS_TOKEN_KEY!
    );
  },
};
