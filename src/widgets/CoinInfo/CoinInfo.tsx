import { ICoin } from '../../entities';
import { Button, CoinIcon } from '../../shared';
import { formatNumber } from '../../shared/helpers/formatNumber';
import { CoinPropertiesList } from './components';
import { useContext } from 'react';
import { ModalContext } from '../Modal';

interface ICoinInfoProps {
    coin: ICoin;
}

export function CoinInfo({ coin }: ICoinInfoProps) {
    const { openBuyCoinsModal } = useContext(ModalContext);

    return (
        <div className='py-4 px-1 md:px-3 w-full md:w-[470px] md:h-[580px] lg:h-[700px] rounded-b-xl shadow-xl'>
            <div className='flex flex-col items-start gap-2 sm:gap-4'>
                {/* Icon, name and symbol */}
                <div className='flex flex-row items-center gap-2'>
                    <CoinIcon rank={coin.rank} />
                    <span className='font-bold text-lg'>{coin.name}</span>
                    <span className='text-gray-500'>{coin.symbol}</span>
                </div>

                {/* Price and price change */}
                <div className='flex flex-row gap-6 items-center'>
                    <h2 className='font-bold text-[36px]'>{`$${formatNumber(coin.priceUsd, 4)}`}</h2>
                    <span
                        style={{ color: +coin.changePercent24Hr < 0 ? 'red' : 'green' }}
                        className='text-md'>{`${formatNumber(coin.changePercent24Hr, 3)}%`}</span>
                </div>

                {/* Buttons */}
                <div className='min-w-[75%] flex flex-row justify-between gap-2'>
                    <Button content='Add' color='rgb(74 222 128)' handleClick={() => openBuyCoinsModal(coin)} />
                    <Button content='Back' color='rgb(67 56 202)' handleClick={() => window.history.back()} />
                </div>

                {/* Change, supply... */}
                <CoinPropertiesList coin={coin} />
            </div>
        </div>
    );
}
