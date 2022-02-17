import Metric from '../models/metricInterface';

export const statusMetricData: Metric[] = [
	{
		id: 'signedup',
		name: 'Signed up',
		value: 'signedup',
	},
	{
		id: 'applied',
		name: 'Applied',
		value: 'applied',
	},
	{
		id: 'accepted',
		name: 'Accepted',
		value: 'accepted',
	},
	{
		id: 'approved',
		name: 'Approved',
		value: 'approved',
	},
	{
		id: 'realised',
		name: 'Realised',
		value: 'realised',
	},
	{
		id: 'finished',
		name: 'Finished',
		value: 'finished',
	},
	{
		id: 'completed',
		name: 'Completed',
		value: 'completed',
	},
];

export const productsMetricData: Metric[] = [
	{
		id: 'globalvolunteer',
		name: 'Global Volunteer',
		value: 'globalvolunteer',
	},
	{
		id: 'globaltalent',
		name: 'Global Talent',
		value: 'globaltalent',
	},
	{
		id: 'globalteacher',
		name: 'Global Teacher',
		value: 'globalteacher',
	},
	{
		id: 'membershipexperience',
		name: 'Membership Experience',
		value: 'membershipexperience',
	},
];
