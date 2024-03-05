import LogoutButton from "./components/LogoutButton";

const App = () => {
	return (
		<div>
			<h1>Hello from the main page of the app!</h1>
			<p>EXAMPLE TEXT TO SHOW HOW IT SEEM</p>
			<div>
				<button className="savedBtn">Accept</button>
				<LogoutButton />
			</div>
		</div>
	);
};

export default App;
