import { useDispatch } from 'react-redux';
import { ICoin } from '../../../../entities';
import { CoinIcon, formatNumber } from '../../../../shared';
import { FaMinus } from 'react-icons/fa6';
import { removeCoin } from '../../../../entities/portfolio/lib/portfolioSlice';

interface ICoinsListItemProps {
    coin: ICoin & { count: number };
}

export function CoinsListItem({ coin }: ICoinsListItemProps) {
    const dispatch = useDispatch();

    return (
        <li className='flex flex-row justify-between items-center px-4 py-6 border-y-1'>
            <div className='flex flex-row items-center gap-2'>
                <CoinIcon rank={coin.rank} />
                <span className='text-lg'>{`${coin.name} x${coin.count}`}</span>
                <span className='text-lg font-bold'>{`$${formatNumber(coin.priceUsd, 3)}`}</span>
            </div>

            <FaMinus
                className='w-6 h-6 cursor-pointer rounded-full hover:bg-gray-400'
                onClick={() => dispatch(removeCoin(coin))}
            />
        </li>
    );
}
