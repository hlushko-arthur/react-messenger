import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/guest/login/Login";
import Chats from "./pages/chats/Chats";
import Settings from "./pages/settings/Settings";
import Contacts from "./pages/contacts/Contacts";
import Chat from "./pages/chat/Chat";
import Footer from "./core/layouts/footer/Footer";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Footer></Footer>,
		children: [
			{
				path: 'contacts',
				element: <Contacts></Contacts>,
			},
			{
				path: 'chats',
				element: <Chats></Chats>,
			},
			{
				path: 'settings',
				element: <Settings></Settings>,
			},
		],
	},
	{
		path: '/',
		children: [
			{
				path: 'chats/:userId',
				element: <Chat></Chat>,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}