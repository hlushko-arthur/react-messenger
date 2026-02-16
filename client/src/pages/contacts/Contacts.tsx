import Button from '../../components/button/Button';
import './Contacts.scss';
// images
import plusIcon from '../../assets/icons/plus.png';

const Contacts: React.FC = () => {
	return (
		<div data-component='contacts' className='container'>
			<div className="header">
				<Button link>Sort</Button>
				<span>Contacts</span>
				<Button iconUrl='/src/assets/icons/plus.png'></Button>
			</div>
		</div>
	);
};

export default Contacts;