import { AiOutlineSearch } from 'react-icons/ai';

import FilterIcon from '../../assets/svg/FilterIcon';
import './searchfilter.styles.scss';

const SearchFilter = () => {
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
			<button className='filter__icon'>
				<FilterIcon />
			</button>
		</div>
	);
};

export default SearchFilter;
