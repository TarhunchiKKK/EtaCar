import { useAppSelector } from '../../../../app/store/store';
import { formatNumber } from '../../../../shared';
import { CoinsListItem } from './CoinsListItem';

export function CoinsListModal() {
    const { coins, summary } = useAppSelector((state) => state.portfolio);
    return (
        <div className='w-full h-full px-6 py-8'>
            <p className='mb-6'>
                <span className='text-lg'>{'Summary: '}</span>
                <span className='text-lg font-bold'>{formatNumber(summary, 5)}</span>
            </p>

            <ul className='bg-gray-100 max-h-[370px] overflow-y-auto'>
                {coins.map((coin) => (
                    <CoinsListItem key={coin.id} coin={coin} />
                ))}
                {coins.length === 0 && <p className='text-lg font-semibold text-center'>No coins in portfolio</p>}
            </ul>
        </div>
    );
}
