import { create } from 'zustand';

const useAuth = create((set) => ({
  user: null,
  login: (username) => set({ user: { name: username } }),
  logout: () => set({ user: null }),
}));

export default useAuth;
