import { useLocation } from 'react-router-dom';
import { useGetCoinHistoryQuery } from '../entities';
import { useAppSelector } from '../app/store/store';
import { Loader } from '../shared';
import { CoinHistoryChart } from '../widgets';
import { CoinInfo } from '../widgets';
import { ErrorPage } from './ErrorPage';

export function CoinPage() {
    const { state: coin } = useLocation();
    console.log(coin);
    if (!coin) {
        return <ErrorPage />;
    }

    const { period } = useAppSelector((state) => state.coins);
    const { coinHistory, isLoading: isHistoryLoading } = useGetCoinHistoryQuery(coin.id, period);

    return (
        <section className='py-6'>
            <div className='container mx-auto px-2 md:px-0'>
                {/* {(isCoinLoading || isHistoryLoading) && <Loader />} */}
                {isHistoryLoading && <Loader />}

                <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start'>
                    {coin && <CoinInfo coin={coin} />}

                    {coinHistory && <CoinHistoryChart history={coinHistory} />}
                </div>
            </div>
        </section>
    );
}
