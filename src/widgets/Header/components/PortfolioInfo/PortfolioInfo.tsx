import { useAppSelector } from '../../../../app/store/store';
import { formatNumber } from '../../../../shared/helpers/formatNumber';

export function PortfolioInfo() {
    const { summary } = useAppSelector((state) => state.portfolio);
    return (
        <div className='bg-indigo-900 min-h-[100%] px-3 py-2 flex flex-col justify-center items-start gap-2'>
            <span className='text-xs sm:text-lg lg:text-xl text-white'>{`$${formatNumber(summary, 3)}`}</span>
            <span className='text-xs sm:text-lg lg:text-xl text-white'>+2.38 (1.80%)</span>
        </div>
    );
}
