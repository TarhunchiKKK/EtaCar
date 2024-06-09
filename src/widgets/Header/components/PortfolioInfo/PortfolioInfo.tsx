import { useContext } from 'react';
import { useAppSelector } from '../../../../app/store/store';
import { formatNumber } from '../../../../shared/helpers/formatNumber';
import { ModalContext } from '../../../Modal';
import { usePortfolioCostDifferences } from '../../hooks';

export function PortfolioInfo() {
    const { summary } = useAppSelector((state) => state.portfolio);
    const { openCoinsListModal } = useContext(ModalContext);
    const { difference, percents } = usePortfolioCostDifferences();

    return (
        <div
            className='bg-indigo-900 cursor-pointer min-h-[100%] px-3 py-2 flex flex-col justify-center items-start gap-2'
            onClick={() => openCoinsListModal()}>
            <span className='text-xs sm:text-lg lg:text-xl text-white'>{`$${formatNumber(summary, 3)}`}</span>
            <span style={{ color: difference < 0 ? 'red' : 'green' }} className='text-xs sm:text-lg lg:text-xl'>
                {`$${formatNumber(difference, 2)} (${formatNumber(percents, 2)}%)`}
            </span>
        </div>
    );
}
