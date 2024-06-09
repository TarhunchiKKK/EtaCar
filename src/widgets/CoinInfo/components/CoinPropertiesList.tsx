import { ICoin } from '../../../entities';
import { CoinProperty } from './CoinProperty';
import { formatNumber } from '../../../shared/helpers/formatNumber';

interface ICoinProperiesListProps {
    coin: ICoin;
}

export function CoinPropertiesList({ coin }: ICoinProperiesListProps) {
    return (
        <>
            <div className='w-full flex flex-col items-center gap-4'>
                <CoinProperty name='Supply' value={`${formatNumber(coin.supply, 3)} ${coin.symbol}`} />
                <CoinProperty name='Max supply' value={`${formatNumber(coin.maxSupply, 3)} ${coin.symbol}`} />
                <CoinProperty name='Market cap' value={`$${formatNumber(coin.marketCapUsd, 3)}`} />
                <CoinProperty name='Volume USD' value={`$${formatNumber(coin.volumeUsd24Hr, 3)}`} />
            </div>
        </>
    );
}
