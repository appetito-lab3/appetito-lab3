import axios from 'axios';
import { Platform } from 'react-native';
//import { StorageAdapter } from '../adapters/storage-adapter';

// Obtener las URLs de las variables de entorno de Expo
const STAGE = process.env.EXPO_PUBLIC_STAGE || 'dev'; // 'prod' para producción
const PROD_URL = process.env.EXPO_PUBLIC_API_URL || '';
const API_URL_IOS = process.env.EXPO_PUBLIC_API_URL_IOS || '';
const API_URL_ANDROID = process.env.EXPO_PUBLIC_API_URL_ANDROID || '';

export const API_URL = 
  (STAGE === 'prod')
   ? PROD_URL
   : Platform.OS === 'ios'
      ? API_URL_IOS
      : API_URL_ANDROID;

const petitoApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// TODO: Interceptors
/*tesloApi.interceptors.request.use(
  async (config) => {
    const token = await StorageAdapter.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }
);*/

export {
  petitoApi,
};