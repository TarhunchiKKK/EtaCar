import { ICoinHistory } from '../../entities';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useChartSizes } from './helpers/useChartSizes';

interface ICoinHistoryChartProps {
    history: ICoinHistory[];
}

export function CoinHistoryChart({ history }: ICoinHistoryChartProps) {
    const { chartWidth, chartHeight } = useChartSizes();

    return (
        <div>
            <LineChart width={chartWidth} height={chartHeight} className='mx-auto' data={history}>
                <Line type='monotone' dataKey='priceUsd' stroke='#8884d8' />
                <CartesianGrid stroke='#ccc' />
                <XAxis className='text-xs sm:text-lg lg:text-xl' dataKey='time' />
                <YAxis className='text-xs sm:text-lg lg:text-xl' />
                <Tooltip />
            </LineChart>
        </div>
    );
}
