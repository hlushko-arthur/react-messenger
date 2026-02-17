import './Contacts.scss';
import { useMemo, useState } from 'react';
import UserService from '../../services/user.service';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import debounce from 'lodash/debounce';
import type { User } from '../../core/interfaces/user.interface';

const Contacts: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);

	const debouncedSearch = useMemo(
		() =>
			debounce(async (searchText: string) => {
				const users = await UserService.search(searchText);

				setUsers(users);
			}, 500),
		[],
	);

	return (
		<div data-component='contacts' className='container'>
			<div className="header">
				<Button link>Sort</Button>
				<span>Contacts</span>
				<Button iconUrl='/src/assets/icons/plus.png'></Button>
			</div>

			<div className="search">
				<Input clearable onChange={(e) => debouncedSearch(e.target.value)} placeholder="Search..." width="100%" />
			</div>

			<div className='users'>
				{
					users.length === 0 ?
						<div className="users_empty">No users found.</div>
						:
						users.map((user) => (
							<div key={user._id} className="users_item">
								<div className="users_item_avatar">
									<img src="/src/assets/icons/user.png"></img>
								</div>
								<div className="users_item_title">{user.name}</div>
								<div className="users_item_desc">
									online
								</div>
							</div>
						))
				}
			</div>
		</div>
	);
};

export default Contacts;