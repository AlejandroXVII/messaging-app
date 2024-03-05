import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const LogoutButton = () => {
	const navigate = useNavigate();
	const cookies = new Cookies(null, { path: "/" });
	function logoutUser() {
		cookies.remove("token");
		navigate("/log-in");
		return;
	}
	return <button onClick={logoutUser}>Logout</button>;
};

export default LogoutButton;
