import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
	MdDashboard,
	MdNotifications,
	MdPeople,
	MdPerson,
} from 'react-icons/md';

// import { LoginContext } from '../../Contexts/LoginContext';
import activeClass from '../../models/activeClass';
import './Sidebar.styles.scss';

type SidebarProps = {
	isSidebarExpanded: boolean;
	active: activeClass;
};

const Sidebar: FC<SidebarProps> = ({ isSidebarExpanded, active }) => {
	// const { setLoggedInUser } = useContext(LoginContext)!;

	return (
		<section id='sidebar' className={isSidebarExpanded ? 'expand' : ''}>
			<div className='sidebar__profile' title={'Idowu"s avatar'}>
				<div className='sidebar__profile__image'>
					<img src='/images/Avatar.png' alt='profile avatar' />
				</div>
				<div className='sidebar__profile__details'>
					<p className='sidebar__profile__details__name'>Idowu Fakomi</p>
					<p className='sidebar__profile__details__email'>
						idowu.fakomi@aiesec.net
					</p>
				</div>
			</div>
			<nav className='sidebar__navbar'>
				<ul>
					<li title='dashboard'>
						<Link to='/'>
							<button
								className={active === activeClass.DASHBOARD ? 'active' : ''}
							>
								<MdDashboard />
								<p>Dashboard</p>
							</button>
						</Link>
					</li>
					<li title='notifications'>
						<Link to='/notifications'>
							<button
								className={active === activeClass.NOTIFICATIONS ? 'active' : ''}
							>
								<MdNotifications />
								<p>Notifications</p>
							</button>
						</Link>
					</li>
					<li title='customers'>
						<Link to='/customers'>
							<button
								className={active === activeClass.CUSTOMERS ? 'active' : ''}
							>
								<MdPeople />
								<p>Customers</p>
							</button>
						</Link>
					</li>
					<li title='my profile'>
						<Link to='/profile'>
							<button
								className={active === activeClass.PROFILE ? 'active' : ''}
							>
								<MdPerson />
								<p>My Profile</p>
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default Sidebar;
