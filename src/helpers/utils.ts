const months: string[] = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

export const dayNames: string[] = [
	'SUN',
	'MON',
	'TUE',
	'WED',
	'THU',
	'FRI',
	'SAT',
];

export const dayNumbers: number[] = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
	23, 24, 25, 26, 27, 28, 29, 30, 31,
];

export const getDayMonthYear = (date: Date) => {
	return {
		dayNum: date.getUTCDate(),
		dayName: new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(
			date
		),
		month: months[date.getMonth()],
		year: date.getFullYear(),
	};
};
