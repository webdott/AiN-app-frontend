import { FC } from 'react';

type CurrentStatProps = {
	name: string;
	value: number;
};

const CurrentStat: FC<CurrentStatProps> = ({ name, value }) => {
	return (
		<div className='current__stat'>
			<p className='current__stat__value'>{value}</p>
			<p className='current__stat__name'>{name}</p>
		</div>
	);
};

export default CurrentStat;
