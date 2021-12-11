import { FC } from 'react';

import './footer.styles.scss';

const Footer: FC = () => {
	return (
		<footer className='footer'>
			<div className='AIESEC__logo' title='AIESEC in Nigeria'>
				<img src='/images/AIESECLOGO.png' alt="AIESEC in Nigeria's logo" />
			</div>
		</footer>
	);
};

export default Footer;
