import LogoutButton from "./components/LogoutButton";
import "./styles/message-box.css";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const API_URL = "http://localhost:3000";

const App = () => {
	const [users, setUsers] = useState([]);
	const [messages, setMessages] = useState(null);
	const [thisUser, setThisUser] = useState([]);
	const [otherUser, setOtherUser] = useState(null);
	const cookies = new Cookies(null, { path: "/" });
	async function fetchUsers() {
		// Default options are marked with *
		const response = await fetch(API_URL + "/users", {
			method: "GET",
		});
		const allUser = await response.json();
		const userID = cookies.get("userID");
		setUsers(allUser);
		setThisUser(allUser.find((user) => user._id === userID));
	}
	async function fetchMessages(e) {
		// Default options are marked with *
		const targetID = e.target.parentNode.id || e.target.id;
		const chat = thisUser.chats.find((chat) => chat.user_id === targetID);
		const otherUserData = users.find((user) => user._id === targetID);
		setOtherUser(otherUserData);
		try {
			const response = await fetch(API_URL + "/chats/" + chat.chat_id, {
				method: "GET",
			});
			console.log(typeof response);
			const allMessage = await response.json();
			setMessages(allMessage);
		} catch (error) {
			setMessages(null);
		}
	}
	useEffect(() => {
		fetchUsers();
	}, []);
	return (
		<div className="container">
			<div className="message-box">
				<Sidebar
					users={users}
					thisUser={thisUser}
					fetchMessages={fetchMessages}
				/>
				<Text
					messages={messages}
					otherUser={otherUser}
					thisUser={thisUser}
				/>
			</div>
		</div>
	);
};

const Header = (prop) => {
	return (
		<div className="header bar">
			<div className="icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<title>account-circle</title>
					<path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
				</svg>
			</div>
			<h1>{prop.thisUser.username}</h1>
			<LogoutButton />
		</div>
	);
};

const Sidebar = (prop) => {
	return (
		<div className="sidebar">
			<Header users={prop.users} thisUser={prop.thisUser} />
			<div className="all-user-container">
				{prop.users.map((user) =>
					user._id !== prop.thisUser._id ? (
						<div
							key={user._id}
							id={user._id}
							className="user-container"
							onClick={prop.fetchMessages}
						>
							<div className="icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<title>account-circle</title>
									<path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
								</svg>
							</div>
							<p>{user.username}</p>
						</div>
					) : null
				)}
			</div>
		</div>
	);
};

const Text = (prop) => {
	return (
		<div className="text-box">
			<div className="header bar">
				{" "}
				<h1>
					{prop.otherUser !== null ? prop.otherUser.username : null}
				</h1>
			</div>
			<div className="messages">
				<div className="all-message-container">
					{prop.messages !== null
						? prop.messages.messages.map((message) => (
								<div
									key={message._id}
									className={
										message.sender_id === prop.thisUser._id
											? "message-container"
											: "message-container received"
									}
								>
									<p>{message.text}</p>
								</div>
						  ))
						: null}
				</div>
			</div>
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
