import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCoin, ICoin } from '../../../../entities';
import { CoinIcon, formatNumber } from '../../../../shared';

interface IBuyCoinsModalProps {
    coin: ICoin;
}

export function BuyCoinsModal({ coin }: IBuyCoinsModalProps) {
    const [count, setCount] = useState<number>(1);
    const dispatch = useDispatch();

    function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(addCoin({ ...coin, count }));
    }

    return (
        <div className='w-[300px] sm:w-[400px] px-6 py-8'>
            {/* Icon, name and symbol */}
            <div className='flex flex-row items-center gap-2'>
                <CoinIcon rank={coin.rank} />
                <span className='font-bold text-lg'>{coin.name}</span>
                <span className='text-gray-500'>{coin.symbol}</span>
            </div>

            {/* Price and price change */}
            <div className='flex flex-row gap-6 items-center mb-4'>
                <h2 className='font-bold text-[36px]'>{`$${formatNumber(coin.priceUsd, 4)}`}</h2>
                <span
                    style={{ color: +coin.changePercent24Hr < 0 ? 'red' : 'green' }}
                    className='text-md'>{`${formatNumber(coin.changePercent24Hr, 3)}%`}</span>
            </div>

            <form className='w-full' onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <input
                        type='number'
                        value={count}
                        onChange={(e) => setCount(+e.target.value)}
                        placeholder='Input coins count...'
                        className='w-full px-3 py-2 border-2 border-slate-600 outline-none rounded-md'
                    />
                </div>

                <button
                    type='submit'
                    className='bg-green-400 block mx-auto w-[200px] sm:w-[320px] rounded-lg px-4 py-2'>
                    Buy coin
                </button>
            </form>
        </div>
    );
}
