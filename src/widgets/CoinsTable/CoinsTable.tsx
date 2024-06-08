import { useAppSelector } from '../../app/store/store';
import { ICoin } from '../../entities';
import { TableRaw } from './components';
import { filterCoins } from './helpers';

interface ICoinsTableProps {
    coins: ICoin[];
}

export function CoinsTable({ coins }: ICoinsTableProps) {
    const { searchedCoins, sortOrder } = useAppSelector((state) => state.coins);

    return (
        <table className='w-full'>
            <thead>
                <tr>
                    <td>Logo</td>
                    <td>Name</td>

                    <td className='hidden sm:table-cell'>Symbol</td>

                    <td>Price</td>

                    <td className='hidden xl:table-cell'>Supply</td>
                    <td className='hidden xl:table-cell'>Max supply</td>

                    <td className='hidden sm:table-cell'>Market cap</td>

                    <td>Change</td>
                    <td>Add</td>
                </tr>
            </thead>
            <tbody>
                {filterCoins(coins, {
                    sortOrder,
                    searchedCoins,
                }).map((coin) => (
                    <TableRaw key={coin.id} coin={coin} />
                ))}
            </tbody>
        </table>
    );
}
