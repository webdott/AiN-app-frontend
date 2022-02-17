import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { dayNames, getDayMonthYear } from '../../helpers/utils';
import useCalender from '../../hooks/useCalendar';
import './calendar.styles.scss';

interface CalendarProps {
	closeCalendar: Dispatch<SetStateAction<boolean>>;
}

const Calendar: FC<CalendarProps> = ({ closeCalendar }) => {
	const {
		startDate,
		endDate,
		setStartDate,
		setEndDate,
		currentDate,
		setCurrentDate,
		date,
		lastDate,
		prevLastDate,
		firstDayIndex,
		lastDayIndex,
	} = useCalender();

	const {
		dayNum: startDayNum,
		dayName: startDayName,
		month: startMonth,
		year: startYear,
	} = getDayMonthYear(startDate);
	const {
		dayNum: endDayNum,
		dayName: endDayName,
		month: endMonth,
		year: endYear,
	} = getDayMonthYear(endDate);
	const {
		dayNum: currentDayNum,
		dayName: currentDayName,
		month: currentMonth,
		year: currentYear,
	} = getDayMonthYear(date);

	const [prevDayNumbers, setPrevDayNumbers] = useState<number[]>([1]);
	const [dayNumbers, setDayNumbers] = useState<number[]>([1]);
	const [nextDayNumbers, setNextDayNumbers] = useState<number[]>([1]);

	// useEffect(() => {
	// 	const newPrevDayNumbers = [];
	// 	const prevLastDay = prevLastDate.getDate();
	// 	for (let i = firstDayIndex; i > 0; i--) {
	// 		newPrevDayNumbers.push(prevLastDay - i + 1);
	// 	}
	// 	setPrevDayNumbers(newPrevDayNumbers);
	// }, [prevLastDate, firstDayIndex]);

	// useEffect(() => {
	// 	const newDayNumbers = [];
	// 	for (let i = 1; i <= lastDate.getDate(); i++) {
	// 		newDayNumbers.push(i);
	// 	}
	// 	setDayNumbers(newDayNumbers);
	// }, [lastDate]);

	// useEffect(() => {
	// 	const newNextDayNumbers = [];
	// 	const nextDays = 7 - lastDayIndex - 1;
	// 	for (let i = 1; i <= nextDays; i++) {
	// 		newNextDayNumbers.push(i);
	// 	}
	// 	setNextDayNumbers(newNextDayNumbers);
	// }, [lastDate, lastDayIndex]);

	return (
		<div
			id='calendar__modal'
			onClick={(e) => {
				const target = e.target as HTMLDivElement;
				console.log(target.className);
				if (
					!(target instanceof SVGElement) &&
					target.id.includes('calendar__modal')
				) {
					return closeCalendar(false);
				}
			}}
		>
			<div className='calendar'>
				<div className='date__range'>
					<div className='from'>
						{endMonth} {startDayNum}, {startYear}
					</div>
					<HiOutlineArrowNarrowRight />
					<div className='to'>
						{endMonth} {endDayNum}, {endYear}
					</div>
				</div>
				<div className='current__date__controls'>
					<p className='current__date'>
						{currentMonth} {currentYear}
					</p>
					<div className='controls'>
						<button
							className='left'
							onClick={() => date.setMonth(date.getMonth() - 1)}
						>
							<MdKeyboardArrowLeft />
						</button>
						<button
							className='right'
							onClick={() => {
								console.log('clicked right');
								date.setMonth(date.getMonth() + 1);
							}}
						>
							<MdKeyboardArrowRight />
						</button>
					</div>
				</div>

				<div className='calendar__date'>
					<div className='day__names'>
						{dayNames.map((day) => (
							<p key={day} className='day__name'>
								{day}
							</p>
						))}
					</div>
					<div className='day__numbers'>
						{prevDayNumbers.map((dayNumber) => (
							<p
								key={dayNumber}
								className={`
								day__number 
								${dayNumber > startDayNum && dayNumber < endDayNum ? 'in__range' : ''}
								${dayNumber === startDayNum || dayNumber === endDayNum ? 'selected' : ''}
								${dayNumber === startDayNum ? 'first' : ''}
								${dayNumber === endDayNum ? 'last' : ''}
								`}
							>
								{dayNumber}
							</p>
						))}
						{dayNumbers.map((dayNumber) => (
							<p
								key={dayNumber}
								className={`
								day__number 
								${dayNumber > startDayNum && dayNumber < endDayNum ? 'in__range' : ''}
								${dayNumber === startDayNum || dayNumber === endDayNum ? 'selected' : ''}
								${dayNumber === startDayNum ? 'first' : ''}
								${dayNumber === endDayNum ? 'last' : ''}
								`}
							>
								{dayNumber}
							</p>
						))}
						{nextDayNumbers.map((dayNumber) => (
							<p
								key={dayNumber}
								className={`
								day__number 
								${dayNumber > startDayNum && dayNumber < endDayNum ? 'in__range' : ''}
								${dayNumber === startDayNum || dayNumber === endDayNum ? 'selected' : ''}
								${dayNumber === startDayNum ? 'first' : ''}
								${dayNumber === endDayNum ? 'last' : ''}
								`}
							>
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
