import { useEffect, useMemo, useState } from 'react';

const useCalender = () => {
	const today = new Date();
	const [startDate, setStartDate] = useState<Date>(today);
	const [endDate, setEndDate] = useState<Date>(today);
	const [currentDate, setCurrentDate] = useState<Date>(today);
	const date = useMemo(() => new Date(), []);
	const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	const prevLastDate = new Date(date.getFullYear(), date.getMonth(), 0);
	const lastDayIndex = lastDate.getDay();
	const firstDayIndex = date.getDay();
	console.log(lastDate, prevLastDate, firstDayIndex, lastDayIndex);
	
	useEffect(() => {
		console.log('hello')
	}, [date]);

	return {
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
	};
};

export default useCalender;
