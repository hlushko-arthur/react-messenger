import { useState } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import './Contacts.scss';

const Contacts: React.FC = () => {
	const [searchText, setSearchText] = useState('');

	return (
		<div data-component='contacts' className='container'>
			<div className="header">
				<Button link>Sort</Button>
				<span>Contacts</span>
				<Button iconUrl='/src/assets/icons/plus.png'></Button>
			</div>

			<div className="search">
				<Input clearable value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search..." width="100%" />
			</div>

			<div className='users'>
				<div className="users_item">
					<div className="users_item">
						<div className="users_item_avatar">
							<img src="/src/assets/icons/user.png"></img>
						</div>
						<div className="users_item_title">yulechka</div>
						<div className="users_item_desc">
							online
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;