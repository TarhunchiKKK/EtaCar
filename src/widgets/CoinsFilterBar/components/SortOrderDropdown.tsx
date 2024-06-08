import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/store/store';
import { CoinsSortOrder, setSortOrder } from '../../../entities';
import { useCallback } from 'react';
import { DropdownOptions } from '../../../shared';

export function SortOrderDropdown() {
    const dispatch = useDispatch();
    const { sortOrder: currentSortOrder } = useAppSelector((state) => state.coinsFilters);

    const getSortOrders = useCallback(() => {
        const sortOrders: JSX.Element[] = [];
        Object.values(CoinsSortOrder).forEach((sortOrder) => {
            sortOrders.push(
                <option value={sortOrder} key={sortOrder} className='px-2 py-1 outline-none border hover:bg-none'>
                    {sortOrder}
                </option>,
            );
        });
        return sortOrders;
    }, []);

    return (
        <div className='w-max flex flex-col items-start gap-2'>
            <p>Sort by:</p>
            <select
                className='w-full rounded-md px-2 py-1 outline-none border shadow-md'
                defaultValue={currentSortOrder}
                onChange={(e) => dispatch(setSortOrder(e.target.value as CoinsSortOrder))}>
                <DropdownOptions getOptions={getSortOrders} />
            </select>
        </div>
    );
}
