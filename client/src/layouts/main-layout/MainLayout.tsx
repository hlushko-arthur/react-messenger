import Header from "./header/Header";
import Aside from "./aside/Aside";
import { Outlet } from "react-router-dom";
import './MainLayout.scss';

const MainLayout = () => {
	return (
		<div className="main-layout">
			<Header />
			<div className="main-layout__content">
				<Aside />
				<div className="main-layout__content-main">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default MainLayout;