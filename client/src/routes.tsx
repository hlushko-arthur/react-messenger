import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Messenger from "./pages/messenger/Messenger";
import Login from "./pages/guest/login/Login";
import MainLayout from "./layouts/main-layout/MainLayout";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		children: [
			{ path: 'messenger', element: <Messenger /> },

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