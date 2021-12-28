import { FC } from 'react';
import { BarChart, Bar, Tooltip, LabelList } from 'recharts';

const data = [
	{
		name: 'Signups',
		value: 110,
	},
	{
		name: 'Applied',
		value: 72,
	},
	{
		name: 'Accepted',
		value: 43,
	},
	{
		name: 'Approved',
		value: 15,
	},
	{
		name: 'Realized',
		value: 12,
	},
	{
		name: 'Finished',
		value: 5,
	},
	{
		name: 'Completed',
		value: 2,
	},
];

const renderCustomizedLabel = (props: any) => {
	const { x, y, width, value } = props;
	const radius = 16;

	return (
		<g>
			<text
				x={x + width / 2}
				y={y - radius}
				fill='#52565E'
				textAnchor='middle'
				dominantBaseline='middle'
				fontWeight='300'
				fontSize='14'
			>
				{value}
			</text>
		</g>
	);
};

const renderCustomizedLabelBottom = (props: any) => {
	const { x, width, value } = props;

	return (
		<g>
			<text
				x={x + width / 2}
				y={410}
				fill='#52565E'
				textAnchor='middle'
				dominantBaseline='middle'
				fontWeight='300'
				fontSize='9'
			>
				{value}
			</text>
		</g>
	);
};

const FunnelChart: FC = () => {
	return (
		<div className='chart funnel__chart'>
			<p className='title'>Funnel chart</p>

			<BarChart
				width={494}
				height={416}
				data={data}
				margin={{
					top: 5,
					right: 0,
					left: 0,
					bottom: 20,
				}}
			>
				<Tooltip />
				<Bar dataKey='value' fill='#037EF3' width={56}>
					<LabelList dataKey='value' content={renderCustomizedLabel} />
					<LabelList dataKey='name' content={renderCustomizedLabelBottom} />
				</Bar>
			</BarChart>
		</div>
	);
};

export default FunnelChart;
