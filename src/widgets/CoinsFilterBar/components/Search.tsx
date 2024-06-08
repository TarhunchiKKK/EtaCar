import { useDispatch } from 'react-redux';
import { setSearchedCoins } from '../../../entities';
import { useAppSelector } from '../../../app/store/store';

export function Search() {
    const dispatch = useDispatch();
    const { searchedCoins } = useAppSelector((state) => state.coins);
    return (
        <input
            type='text'
            placeholder='Coin name...'
            className='grow w-full md:mr-8 rounded-xl px-4 py-2 outline-none border shadow-md'
            value={searchedCoins}
            onChange={(e) => dispatch(setSearchedCoins(e.target.value))}
        />
    );
}
