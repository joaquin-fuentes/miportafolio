import { create } from "zustand";

const API_KEY = import.meta.env.VITE_API_KEY;

export const useClimaStore = create((set) => ({
  clima: null,
  loading: false,
  error: null,

  obtenerClima: async () => {
    set({ loading: true, error: null });

    try {
      // Usar geolocalización del navegador
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`
        );
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Error al obtener clima");

        set({ clima: data, loading: false });
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
