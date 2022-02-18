import { Dispatch, FC, SetStateAction, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import Select from 'react-select';

import { lcOptions } from '../../data/lcOptions';
import Metric from '../../models/metricInterface';
import CustomCheckbox from './CustomCheckbox';

interface FilterMetricProps {
	title: string;
	options?: Metric[];
	type: string;
	openCalendar?: Dispatch<SetStateAction<boolean>>;
}

const FilterMetric: FC<FilterMetricProps> = ({
	title,
	options,
	type,
	openCalendar,
}) => {
	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<div className='filter__metric'>
			<div
				className='filter__metric__title'
				onClick={() => setExpanded((expanded) => !expanded)}
			>
				<button className={`close__metric ${expanded ? 'open' : 'close'}`}>
					<BiMinus />
					<BiPlus />
				</button>
				<p className='metric__title'>{title}</p>
			</div>
			{type === 'checkbox' && (
				<div
					className={`filter__metric__options ${expanded ? 'expanded' : 'closed'}`}
				>
					{options?.map((option) => (
						<div className='metric__option' key={option.id}>
							<CustomCheckbox
								id={option.id}
								name={option.name}
								value={option.value}
							/>
							<label htmlFor={option.id}>{option.name}</label>
						</div>
					))}
				</div>
			)}
			{type === 'committee' && (
				<div
					className={`filter__metric__options ${expanded ? 'expanded' : 'closed'}`}
				>
					<Select
						defaultValue={[lcOptions[0], lcOptions[7]]}
						isMulti
						name='LCs'
						options={lcOptions}
						className='basic-multi-select'
						classNamePrefix='select'
						placeholder='Input Local committee'
					/>
				</div>
			)}
			{type === 'date' && (
				<div
					className={`filter__metric__options ${expanded ? 'expanded' : 'closed'}`}
				>
					<div
						className='date__result'
						onClick={() => openCalendar && openCalendar(true)}
					>
						Nov 30, 2020 - Nov 30, 2021
					</div>
				</div>
			)}
		</div>
	);
};

export default FilterMetric;
