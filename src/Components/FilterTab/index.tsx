import { Dispatch, FC, SetStateAction } from 'react';
import { IoMdClose } from 'react-icons/io';

import FilterMetric from './FilterMetric';
import { statusMetricData, productsMetricData } from '../../data/metricData';
import './filtertab.scss';

interface FilterTabProps {
	open: boolean;
	closeFunc: Dispatch<SetStateAction<boolean>>;
	openCalendar: Dispatch<SetStateAction<boolean>>;
}

const FilterTab: FC<FilterTabProps> = ({ open, closeFunc, openCalendar }) => {
	return (
		<div id='filter__tab__container' className={open ? 'open' : 'close'}>
			<div className='filter__tab'>
				<div className='title__close'>
					<p className='title'>Filter by</p>
					<button
						className={`close__icon ${open ? 'blue' : ''}`}
						onClick={() => closeFunc(false)}
					>
						<IoMdClose />
					</button>
				</div>
				<div className='filter__body'>
					<FilterMetric
						title='Status'
						options={statusMetricData}
						type='checkbox'
					/>
					<FilterMetric
						title='Products'
						options={productsMetricData}
						type='checkbox'
					/>
					<FilterMetric
						title='Committee'
						type='committee'
					/>
					<FilterMetric
						title='Date/Range'
						type='date'
                        openCalendar={openCalendar}
					/>
				</div>
			</div>
		</div>
	);
};

export default FilterTab;
