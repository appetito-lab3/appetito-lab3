import axios from 'axios';
import { Platform } from 'react-native';
import { StorageAdapter } from '../../adapters/storageAdapter';

// Obtener las URLs de las variables de entorno de Expo
const STAGE = process.env.EXPO_PUBLIC_STAGE || 'dev'; // 'prod' para producción
const API_URL_IOS = process.env.EXPO_PUBLIC_API_URL_IOS || '';
const PROD_URL = process.env.EXPO_PUBLIC_API_URL || 'http://192.168.31.174:3000';
const API_URL_ANDROID = process.env.EXPO_PUBLIC_API_URL_ANDROID || 'http://192.168.31.174:3000';





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
petitoApi.interceptors.request.use(
  async (config) => {
    const token = await StorageAdapter.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }
);

export {
  petitoApi,
};