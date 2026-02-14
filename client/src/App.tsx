import './App.css';
import Aside from './layouts/main-layout/aside/Aside';
import Header from './layouts/main-layout/header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/guest/login/Login';
import Messenger from './pages/messenger/Messenger';

function App() {
	return (
		<div className="wrapper">
			<Routes>
				<Route path="/" element={<Login></Login>}></Route>
			</Routes>

			{/* <Routes>
				<Route Component={Header} path="/messenger" element={<Messenger></Messenger>}></Route>
			</Routes> */}

			{/* <Header></Header> */}
			{/* <Aside></Aside> */}
			{/* <Route path="/profile" element={<Aside />}>
				<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			</Route> */}
		</div>
	);
}

export default App;
