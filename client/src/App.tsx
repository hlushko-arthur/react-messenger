import './App.css';
import Aside from './components/aside/Aside';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/guest/login/Login';

function App() {
	return (
		<div className="wrapper">
			<Routes>
				<Route path="/" element={<Login></Login>}></Route>
			</Routes>
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
