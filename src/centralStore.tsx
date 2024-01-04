import { create } from "zustand";
import useStore1 from "./store1";
import useStore2 from "./store2";
import { useCounterStore } from "./store";

const useCentralStore = create(() => ({
	...useStore1,
	...useStore2,
	...useCounterStore,
}));

export default useCentralStore;
