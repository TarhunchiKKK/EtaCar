import { ICoin } from '../../entities';

interface ICoinsTableProps {
    coins: ICoin[];
}

export function CoinsTable({ coins }: ICoinsTableProps) {
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
                    <tr key={coin.id}>
                        <td>{coin.rank}</td>
                        <td>{coin.name}</td>
                        <td>{coin.symbol}</td>
                        <td>{coin.priceUsd}</td>
                        <td>{coin.marketCapUsd}</td>
                        <td>{coin.changePercent24Hr}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
