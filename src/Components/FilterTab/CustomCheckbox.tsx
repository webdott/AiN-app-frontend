import { FC } from 'react';

interface CustomCheckboxProps {
	id: string;
	name: string;
	value: string;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ id, name, value }) => {
	return (
		<div className='custom-checkbox'>
			<input
				className='inp-checkboxx'
				name={name}
				value={value}
				id={id}
				type='checkbox'
				style={{ display: 'none' }}
			/>
			<label className='checkboxx' htmlFor={id}>
				<span className='demo-check'>
					<svg width='12px' height='10px' viewBox='0 0 12 10'>
						<polyline points='1.5 6 4.5 9 10.5 1'></polyline>
					</svg>
				</span>
			</label>
		</div>
	);
};

export default CustomCheckbox;
