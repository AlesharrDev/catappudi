import { create } from 'zustand';

interface DateState {
  formattedDate: string;
  updateFormattedDate: () => void;
}

export const useDateStore = create<DateState>((set) => ({
  formattedDate: '',
  updateFormattedDate: () => {
    const date = new Date();
    const day = date.getDate();
    const monthNames = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    set({ formattedDate: `${day} de ${month} del ${year}` });
  },
}));