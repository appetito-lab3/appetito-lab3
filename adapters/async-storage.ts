// Importamos AsyncStorage, que permite el almacenamiento persistente en React Native
import AsyncStorage from '@react-native-async-storage/async-storage';

// Definimos una clase StorageAdapter para manejar el almacenamiento local de manera estructurada
export class StorageAdapter {

  /**
   * Obtiene un valor almacenado en AsyncStorage con la clave proporcionada.
   * @param key - Clave del valor a recuperar.
   * @returns - El valor almacenado o `null` si no existe o ocurre un error.
   */
  static async getItem(key: string): Promise<string | null> {
    try {
      // Recupera el valor almacenado con la clave `key`
      return await AsyncStorage.getItem(key);
    } catch (error) {
      // En caso de error, devuelve `null` en lugar de lanzar una excepción
      return null;
    }
  }

  /**
   * Almacena un valor en AsyncStorage bajo la clave especificada.
   * @param key - Clave bajo la cual se guardará el valor.
   * @param value - Valor a almacenar.
   */
  static async setItem(key: string, value: string): Promise<void> {
    try {
      // Guarda el valor bajo la clave `key`
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Si hay un error, lanza una excepción con detalles sobre la clave y el valor
      throw new Error(`Error setting item ${key} ${value}`);
    }
  }

  /**
   * Elimina un valor almacenado en AsyncStorage usando la clave proporcionada.
   * @param key - Clave del valor a eliminar.
   */
  static async removeItem(key: string): Promise<void> {
    try {
      // Elimina el valor almacenado bajo la clave `key`
      await AsyncStorage.removeItem(key);
    } catch (error) {
      // Registra el error en la consola
      console.log(error);
      // Lanza una excepción con detalles sobre la clave eliminada
      throw new Error(`Error removing item ${key}`);
    }
  }
}