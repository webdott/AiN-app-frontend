import { FC } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
	{ name: 'None', value: 268, color: '#F3F4F7' },
	{ name: 'GTa', value: 106, color: '#0CB9C1' },
	{ name: 'GTe', value: 9, color: '#F48924' },
	{ name: 'GV', value: 46, color: '#F85A40' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	value,
}: {
	cx: number;
	cy: number;
	midAngle: number;
	innerRadius: number;
	outerRadius: number;
	value: number;
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill='#52565E'
			fontWeight='lighter'
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline='central'
		>
			{`${value}`}
		</text>
	);
};

const ProductInterestChart: FC = () => {
	return (
		<div className='chart product__interest__chart'>
			<p className='title'>Product Interest</p>
			<p className='subtitle'>Showing stats for 429 people</p>

			<PieChart width={358} height={358}>
				<Pie
					data={data}
					cx={179}
					cy={179}
					innerRadius={120}
					outerRadius={150}
					fill='#8884d8'
					paddingAngle={1}
					dataKey='value'
					labelLine={false}
					label={renderCustomizedLabel}
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.color} />
					))}
				</Pie>
			</PieChart>

			<div className='legends'>
				{data.map((entry, index) => (
					<div className='legend' key={`cell-${index}`}>
						<div
							className='legend__color'
							style={{ background: entry.color }}
						></div>
						<p className='legend__name'>{entry.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductInterestChart;
