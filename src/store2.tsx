import { create } from "zustand";

const useStore2 = create((set) => ({
	user: null,
	setUser: (user) => set({ user }),
}));

export default useStore2;
