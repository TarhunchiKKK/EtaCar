import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/store/store';
import { useCallback } from 'react';
import { DropdownOptions } from '../../../shared';
import { setLimit } from '../../../entities';

export function LimitDropdown() {
    const dispatch = useDispatch();
    const { limit } = useAppSelector((state) => state.coins);

    const getLimits = useCallback(() => {
        let counter: number = 20;
        const limits: JSX.Element[] = [];
        for (let i = 0; i < 10; i++) {
            limits.push(
                <option key={counter} value={counter}>
                    {counter}
                </option>,
            );
            counter += 10;
        }
        return limits;
    }, []);

    return (
        <div className='w-max flex flex-col items-start gap-2'>
            <p>Show:</p>
            <select
                className='w-full rounded-md px-2 py-1 outline-none border shadow-md'
                defaultValue={limit}
                onChange={(e) => dispatch(setLimit(+e.target.value))}
            >
                <DropdownOptions getOptions={getLimits} />
            </select>
        </div>
    );
}
