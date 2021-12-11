import { useEffect, useState } from 'react';

const useCalender = () => {
	const [startDate, setStartDate] = useState<Date>();
	const [endDate, setEndDate] = useState<Date>();
	const [currentMonth, setCurrentMonth] = useState<string>();
	const [currentYear, setCurrentYear] = useState<string>();

	useEffect(() => {
		const today = new Date();
		setStartDate(today);
		setEndDate(today);
	}, []);

	return {
		startDate,
		endDate,
		setStartDate,
		setEndDate,
		currentMonth,
		setCurrentMonth,
		currentYear,
		setCurrentYear,
	};
};

export default useCalender;
