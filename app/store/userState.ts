import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  nombre: string;
  setNombre: (nombre: string) => void;
  clearNombre: () => void;
  loadNombre: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  nombre: '',
  setNombre: async (nombre) => {
    await AsyncStorage.setItem('nombre', nombre);
    set({ nombre });
  },
  clearNombre: async () => {
    await AsyncStorage.removeItem('nombre');
    set({ nombre: '' });
  },
  loadNombre: async () => {
    const storedNombre = await AsyncStorage.getItem('nombre');
    if (storedNombre) {
      set({ nombre: storedNombre });
    }
  },
}));