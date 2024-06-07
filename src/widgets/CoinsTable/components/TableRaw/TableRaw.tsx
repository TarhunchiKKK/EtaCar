import { useDispatch } from 'react-redux';
import { addCoin, ICoin } from '../../../../entities';
import { AddButton } from '../AddButton';
import { CoinIcon } from '../CoinIcon';
import { formatNumber } from '../../../../shared/helpers/FormatNumber';

interface ITableRawProps {
    coin: ICoin;
}

export function TableRaw({ coin }: ITableRawProps) {
    const dispatch = useDispatch();

    return (
        <tr>
            <td>
                <CoinIcon rank={coin.rank} />
            </td>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>{formatNumber(coin.priceUsd, 2)}</td>
            <td>{formatNumber(coin.marketCapUsd, 2)}</td>
            <td>{formatNumber(coin.changePercent24Hr, 2)}</td>

            <td>
                <AddButton handleClick={() => dispatch(addCoin(coin))} />
            </td>
        </tr>
    );
}
