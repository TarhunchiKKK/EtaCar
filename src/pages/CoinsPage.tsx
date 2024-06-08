import ReactPaginate from 'react-paginate';
import { useAppSelector } from '../app/store/store';
import { setOffset, useGetCoinsCountQuery, useGetCoinsQuery } from '../entities';
import { Loader } from '../shared';
import { CoinsFilterBar, CoinsTable } from '../widgets';
import { useDispatch } from 'react-redux';

export function CoinsPage() {
    const dispatch = useDispatch();
    const { limit, offset } = useAppSelector((state) => state.coins);
    const { data: coinsCount } = useGetCoinsCountQuery();
    const { data: coins, isLoading, isFetching } = useGetCoinsQuery({ limit, offset });
    return (
        <>
            <section className='mb-8'>
                <div className='container mx-auto px-2 md:px-0'>
                    <CoinsFilterBar />
                </div>
            </section>

            <section>
                <div className='container mx-auto px-2 md:px-0'>
                    {(isLoading || isFetching) && <Loader />}

                    {coins && <CoinsTable coins={coins} />}

                    {coinsCount && (
                        <ReactPaginate
                            breakLabel='...'
                            nextLabel='>'
                            previousLabel='<'
                            pageCount={Math.floor(coinsCount / limit)}
                            pageRangeDisplayed={4}
                            onPageChange={(e) => dispatch(setOffset(e.selected * limit))}
                            renderOnZeroPageCount={null}
                            className='max-w-[500px] mx-auto mt-6 flex flex-row items-center justify-between'
                        />
                    )}
                </div>
            </section>
        </>
    );
}
