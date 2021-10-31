import { FC } from 'react';
import { Link } from 'react-router-dom';

type NotificationProps = {
    name: string;
    title: string;
    message: string; 
}

const Notification: FC<NotificationProps> = ({ name, title, message }) => {
	return (
        <div className='notification'>
            <div className="notification__title">
                <img src="/images/Global Talent.png" alt="GTe logo" />
                <p><Link to='#'>{name}</Link> &nbsp; {title}</p>
            </div>
            <div className="notification__message">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Notification;
