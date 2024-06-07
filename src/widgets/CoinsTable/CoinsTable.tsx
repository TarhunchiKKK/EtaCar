import { useAppSelector } from '../../app/store/store';
import { ICoin } from '../../entities';
import { TableRaw } from './components';
import { transformCoins } from './helpers';

interface ICoinsTableProps {
    coins: ICoin[];
}

export function CoinsTable({ coins }: ICoinsTableProps) {
    const { searchedCoins, sortOrder } = useAppSelector(
        (state) => state.coinsFilters,
    );
    coins = transformCoins(coins, {
        sortOrder,
        searchedCoins,
    });

    return (
        <table>
            <thead>
                <tr>
                    <td>Logo</td>
                    <td>Name</td>
                    <td>Symbol</td>
                    <td>Price</td>
                    <td>Capitalization</td>
                    <td>Change</td>
                    <td>Add</td>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin) => (
                    <TableRaw key={coin.id} coin={coin} />
                ))}
            </tbody>
        </table>
    );
}
