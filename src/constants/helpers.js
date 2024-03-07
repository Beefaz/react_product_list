export const syncStorage = (storageKey, array = []) => {
    let items = JSON.parse(localStorage.getItem(storageKey));
    if (!items) {
      localStorage.setItem(storageKey, JSON.stringify([...array]));
      return;
    }
    localStorage.removeItem(storageKey);
    localStorage.setItem(storageKey, JSON.stringify([...array]));
}

export const initStorage = (storageKey) => {
    let cartItems = JSON.parse(localStorage.getItem(storageKey));
    if (!cartItems) return [];
    return Object.values(cartItems).reduce((acc, item) => [...acc, item], []);
}
