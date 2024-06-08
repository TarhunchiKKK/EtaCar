import ReactPaginate from 'react-paginate';
import { useAppSelector } from '../app/store/store';
import { setOffset, useGetCoinsQuery } from '../entities';
import { Loader } from '../shared';
import { CoinsTable } from '../widgets';
import { useDispatch } from 'react-redux';

export function CoinsPage() {
    const dispatch = useDispatch();
    const { limit, offset, searchedCoins, sortOrder } = useAppSelector(
        (state) => state.coinsFilters,
    );
    const {
        data: coins,
        isLoading,
        isFetching,
    } = useGetCoinsQuery({ limit, offset });

    return (
        <>
            {coins && <CoinsTable coins={coins} />}
            {(isLoading || isFetching) && <Loader />}
            <ReactPaginate
                breakLabel='...'
                nextLabel='>'
                previousLabel='<'
                pageCount={Math.floor(2000 / limit)}
                pageRangeDisplayed={6}
                onPageChange={(e) => dispatch(setOffset(e.selected * limit))}
                renderOnZeroPageCount={null}
            />
        </>
    );
}
