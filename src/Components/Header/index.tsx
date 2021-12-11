import { Dispatch, FC, SetStateAction } from 'react';

import './header.styles.scss';

interface HeaderProps {
	isSidebarExpanded: boolean;
	setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
	page: string;
}

const Header: FC<HeaderProps> = ({
	isSidebarExpanded,
	setIsSidebarExpanded,
	page,
}) => {
	return (
		<header className='header'>
			<button
				className='hamburger'
				onClick={() =>
					setIsSidebarExpanded((isSidebarExpanded) => !isSidebarExpanded)
				}
			>
				<div id='nav-icon1' className={isSidebarExpanded ? 'open' : ''}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>

			<p>{page}</p>
		</header>
	);
};

export default Header;
