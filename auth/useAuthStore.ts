import { create } from 'zustand';
import { User } from '../entities/user';
import { AuthStatus } from '../interfaces/auth.status';
import { authCheckStatus, authLogin } from '../actions/auth/auth';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string, apiUrl?: string) => Promise<boolean>;
  //checkStatus: () => Promise<void>;
  //logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  (set, get) => ({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: async (email: string, password: string, apiUrl?: string) => {
      try {
        const resp = await authLogin(email, password, apiUrl);
        
        if (!resp) {
          set({ status: 'unauthenticated', token: undefined, user: undefined });
          return false;
        }
        
        /*await StorageAdapter.setItem('token', resp.token);*/
        console.log({ resp });
        set({ status: 'authenticated', token: resp.token, user: resp.user });
        
        return true;
      } catch (error) {
        console.error('Error en login:', error);
        set({ status: 'unauthenticated', token: undefined, user: undefined });
        return false;
      }
    },
    
    /*checkStatus: async () => {
      const resp = await authCheckStatus();
      if ( !resp ) {
        set({ status: 'unauthenticated', token: undefined, user: undefined });
        return;
      }
      await StorageAdapter.setItem('token', resp.token);
      set({ status: 'authenticated', token: resp.token, user: resp.user });
    },
    
    logout: async () => {
      await StorageAdapter.removeItem('token');
      set({ status: 'unauthenticated', token: undefined, user: undefined });
    }*/
  })
);