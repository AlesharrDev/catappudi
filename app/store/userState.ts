import { create } from 'zustand';

interface UserState {
  nombre: string;
  setNombre: (nombre: string) => void;
  clearNombre: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  nombre: '',
  setNombre: (nombre) => set({ nombre }),
  clearNombre: () => set({ nombre: '' }),
}));