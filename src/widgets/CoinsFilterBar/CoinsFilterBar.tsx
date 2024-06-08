import { LimitDropdown, Search, SortOrderDropdown } from './components';

export function CoinsFilterBar() {
    return (
        <div className='container mx-auto'>
            <div className='w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center p-2'>
                <Search />

                <div className='w-full md:w-auto flex flex-row justify-between items-center gap-6'>
                    <SortOrderDropdown />
                    <LimitDropdown />
                </div>
            </div>
        </div>
    );
}
