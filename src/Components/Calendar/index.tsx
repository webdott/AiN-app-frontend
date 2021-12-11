import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { dayNames, dayNumbers } from '../../helpers/utils';

import './calendar.styles.scss';

const Calendar = () => {
	return (
		<div id='calendar__modal'>
			<div className='calendar'>
				<div className='date__range'>
					<div className='from'>Nov 10, 2021</div>
					<HiOutlineArrowNarrowRight />
					<div className='to'>Nov 10, 2021</div>
				</div>
				<div className='current__date__controls'>
					<p className='current__date'>Nov 2019</p>
					<div className='controls'>
						<button className='left'>
							<MdKeyboardArrowLeft />
						</button>
						<button className='right'>
							<MdKeyboardArrowRight />
						</button>
					</div>
				</div>

				<div className='calendar__date'>
					<div className='day__names'>
						{dayNames.map((day) => (
							<p className='day__name'>{day}</p>
						))}
					</div>
					<div className='day__numbers'>
						{dayNumbers.map((dayNumber) => (
							<p className={
								`
								day__number 
								${dayNumber > 1 && dayNumber < 21 ? 'in__range' : ''}
								${dayNumber === 1 || dayNumber === 21 ? 'selected' : ''}
								`
							}>
								{dayNumber}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
