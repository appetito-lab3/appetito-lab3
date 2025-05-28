import axios from 'axios';
import { User } from '../../entities/user';

interface LoginResponse {
  user: User;
  token: string;
}

export const authLogin = async (
  email: string, 
  password: string, 
  apiUrl?: string
): Promise<LoginResponse | null> => {
  try {
    // Usar la URL proporcionada o una URL por defecto
    const baseUrl = apiUrl || process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';
    
    console.log('Intentando login con URL:', baseUrl);
    
    const { data } = await axios.post<LoginResponse>(`${baseUrl}/api/auth/login`, {
      email,
      password,
    });

    return data;
  } catch (error) {
    console.error('Error en authLogin:', error);
    return null;
  }
}

export const authCheckStatus = async (): Promise<LoginResponse | null> => {
  // Implementación para verificar el estado de autenticación
  // ...
  return null;
}