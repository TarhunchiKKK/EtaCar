import { useContext } from 'react';
import { useAppSelector } from '../../../../app/store/store';
import { formatNumber } from '../../../../shared/helpers/formatNumber';
import { ModalContext } from '../../../Modal';

export function PortfolioInfo() {
    const { summary } = useAppSelector((state) => state.portfolio);
    const { openCoinsListModal } = useContext(ModalContext);

    return (
        <div className='bg-indigo-900 cursor-pointer min-h-[100%] px-3 py-2 flex flex-col justify-center items-start gap-2' onClick={() => openCoinsListModal()}>
            <span className='text-xs sm:text-lg lg:text-xl text-white'>{`$${formatNumber(summary, 3)}`}</span>
            <span className='text-xs sm:text-lg lg:text-xl text-white'>+2.38 (1.80%)</span>
        </div>
    );
}
