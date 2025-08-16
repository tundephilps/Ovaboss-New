const storageEngine = 'LOCALSTORAGE';

const storage = storageEngine === 'LOCALSTORAGE' ? localStorage : sessionStorage;

export const getPersistedStorage = <T>(key: string): T | null => {
    const value = storage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
};

export const persistStorage = (key: string, value: unknown) => {
    storage.setItem(key, String(value));
};

export const removePersistentStorage = (key: string) => {
    sessionStorage.removeItem(key);
};

export const removeAllPersistentData = () => {
    sessionStorage.clear();
    localStorage.clear();
}