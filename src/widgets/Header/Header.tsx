import { useGetPopularCoinsQuery } from '../../entities';
import { PopularCoinInfo, PortfolioInfo } from './components';

function Header() {
    const { data: coins } = useGetPopularCoinsQuery();
    return (
        <header className='bg-indigo-700'>
            <div className='container mx-auto'>
                <div className='flex flex-row justify-between gap-6'>
                    <div className='flex flex-row justify-between items-center gap-12 py-2 w-2/3 lg:w-3/4 xl:w-4/5 overflow-x-auto scroll-p-3'>
                        {coins && coins.map((coin) => <PopularCoinInfo key={coin.id} coin={coin} />)}
                    </div>

                    <PortfolioInfo />
                </div>
            </div>
        </header>
    );
}

export { Header };
