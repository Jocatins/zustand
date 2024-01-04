import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store";

const setCount = () => {
	useCounterStore.setState({ count: 5 });
};

const App = () => {
	const count = useCounterStore((state) => state.count);

	return (
		<>
			<OtherComponent count={count} />
		</>
	);
};

const OtherComponent = ({ count }: { count: number }) => {
	const increment = useCounterStore((state) => state.increment);
	const incrementAsync = useCounterStore((state) => state.incrementAsync);
	const decrement = useCounterStore((state) => state.decrement);

	useEffect(() => {
		setCount();
	}, []);

	return (
		<>
			<div>{count} </div>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={incrementAsync}>incrementAsync</button>
		</>
	);
};

export default App;
