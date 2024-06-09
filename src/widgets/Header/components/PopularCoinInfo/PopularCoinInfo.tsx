import { NavLink } from 'react-router-dom';
import { ICoin } from '../../../../entities';
import { CoinIcon } from '../../../../shared';

interface IPopularCoinInfoProps {
    coin: ICoin;
}

export function PopularCoinInfo({ coin }: IPopularCoinInfoProps) {
    return (
        <NavLink to={`/coins/${coin.id}`}>
            <div className='rounded-lg bg-white shadow-md flex flex-col gap-1 items-start px-3 py-2'>
                <div className='flex flex-row items-center gap-2'>
                    <CoinIcon rank={coin.rank} />
                    <span className='font-bold text-md'>{coin.name}</span>
                    <span className='text-gray-500 text-sm'>{coin.symbol}</span>
                </div>
                <span className='font-bold text-xl'>{`$${coin.priceUsd}`}</span>
            </div>
        </NavLink>
    );
}
