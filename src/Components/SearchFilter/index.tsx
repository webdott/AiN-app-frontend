import { Dispatch, FC, SetStateAction } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import FilterIcon from '../../assets/svg/FilterIcon';
import './searchfilter.styles.scss';

interface SearchFilterProps {
	open: boolean;
	openFunc: Dispatch<SetStateAction<boolean>>;
}

const SearchFilter: FC<SearchFilterProps> = ({ open, openFunc }) => {
	return (
		<div className='search__filter'>
			<div className='search'>
				<span className='search__icon'>
					<AiOutlineSearch />
				</span>
				<input
					type='search'
					name='search-customer'
					id='search-customer'
					placeholder='Search by name, expa ID ...'
				/>
			</div>

			<button
				className={`filter__icon ${open ? 'blue' : ''}`}
				onClick={() => openFunc((open) => !open)}
			>
				<FilterIcon />
			</button>
		</div>
	);
};

export default SearchFilter;
