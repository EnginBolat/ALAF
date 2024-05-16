import AsyncStorage from "@react-native-async-storage/async-storage";

interface ILocalStorageService {
    save(key: string, data: any): void
    get(key: string): void
    delete(key: string,): void
}

class LocalStorageService implements ILocalStorageService {

    async save(key: string, data: any) {
        try {
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem(key, jsonValue);
            if (__DEV__) { console.log('Saved'); }
        } catch (error) {
            throw error;
        }
    }

    async get(key: string) {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value != null ? JSON.parse(value) : null;
            }
            throw new Error('Value cannot found')
        } catch (error) {
            throw error;
        }
    }

    async delete(key: string) {
        try {
            const value = await AsyncStorage.removeItem(key);
            if (__DEV__) { console.log('Deleted'); }
        } catch (error) {
            throw error;
        }
    }

}
export default LocalStorageService;