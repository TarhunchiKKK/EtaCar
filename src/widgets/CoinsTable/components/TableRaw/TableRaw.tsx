import { useDispatch } from 'react-redux';
import { addCoin, ICoin } from '../../../../entities';
import { CoinIcon } from '../../../../shared/components/CoinIcon';
import { formatNumber } from '../../../../shared/helpers/formatNumber';
import { Button } from '../../../../shared';

interface ITableRawProps {
    coin: ICoin;
}

export function TableRaw({ coin }: ITableRawProps) {
    const dispatch = useDispatch();

    return (
        <tr className='py-2 border-y-2 border-gray-200 hover:bg-gray-100'>
            <td>
                <CoinIcon rank={coin.rank} />
            </td>

            <td>{coin.name}</td>

            <td style={{ color: 'gray' }} className='hidden sm:table-cell'>
                {coin.symbol}
            </td>

            <td>{formatNumber(coin.priceUsd, 2)}</td>

            <td className='hidden xl:table-cell'>{formatNumber(coin.supply, 2)}</td>
            <td className='hidden xl:table-cell'>{formatNumber(coin.maxSupply, 2)}</td>

            <td className='hidden sm:table-cell'>{formatNumber(coin.marketCapUsd, 2)}</td>

            <td style={{ color: +coin.changePercent24Hr < 0 ? 'red' : 'green' }}>
                {`${formatNumber(coin.changePercent24Hr, 2)}%`}
            </td>

            <td>
                <Button content='Add' color='rgb(74 222 128)' handleClick={() => dispatch(addCoin(coin))} />
            </td>
        </tr>
    );
}
