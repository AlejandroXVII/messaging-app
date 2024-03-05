import LogoutButton from "./components/LogoutButton";
import "./styles/message-box.css";

const App = () => {
	return (
		<div className="container">
			<div className="message-box">
				<Sidebar />
				<Text />
			</div>
		</div>
	);
};

const Header = () => {
	return (
		<div className="header bar">
			<div className="icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<title>account-circle</title>
					<path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
				</svg>
			</div>
			<h1>Perfil</h1>
			<LogoutButton />
		</div>
	);
};

const Sidebar = () => {
	return (
		<div className="sidebar">
			<Header />
		</div>
	);
};

const Text = () => {
	return (
		<div className="text-box">
			<div className="header bar"></div>
			<div className="messages"></div>
			<div className="send-messages bar">
				<input type="text" name="message-input" />
				<button className="icon icon-button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<title>send-circle</title>
						<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M8,7.71V11.05L15.14,12L8,12.95V16.29L18,12L8,7.71Z" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default App;
