import { CoinHistoryPeriod, ICoinHistory, setPeriod } from '../../entities';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useChartSizes } from './helpers/useChartSizes';
import { Button } from '../../shared';
import { useDispatch } from 'react-redux';

interface ICoinHistoryChartProps {
    history: ICoinHistory[];
}

export function CoinHistoryChart({ history }: ICoinHistoryChartProps) {
    const { chartWidth, chartHeight } = useChartSizes();
    const dispatch = useDispatch();

    return (
        <div>
            <LineChart width={chartWidth} height={chartHeight} className='mx-auto' data={history}>
                <Line type='monotone' dataKey='priceUsd' stroke='#8884d8' />
                <CartesianGrid stroke='#ccc' />
                <XAxis className='text-xs sm:text-lg lg:text-xl' dataKey='time' />
                <YAxis className='text-xs sm:text-lg lg:text-xl' />
                <Tooltip />
            </LineChart>

            <div className='mt-6 mx-auto w-full sm:w-5/6 lg:w-2/3 gap-6 flex flex-row justify-center items-center'>
                <Button
                    content='1 hour'
                    color='rgb(49 46 129)'
                    handleClick={() => dispatch(setPeriod(CoinHistoryPeriod.Hour))}
                />
                <Button
                    content='12 hours'
                    color='rgb(49 46 129)'
                    handleClick={() => dispatch(setPeriod(CoinHistoryPeriod.HaftDay))}
                />
                <Button
                    content='1 day'
                    color='rgb(49 46 129)'
                    handleClick={() => dispatch(setPeriod(CoinHistoryPeriod.Day))}
                />
            </div>
        </div>
    );
}
