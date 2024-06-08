import loader from './assets/loader.svg';

export function Loader() {
    return (
        <>
            <div className='fixed top-0 left-0 w-screen h-screen z-40 bg-black opacity-60'></div>
            <div className='absolute z-50 w-28 h-28 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img
                    src={loader}
                    alt='Loader'
                    className='w-full h-full animate-spin'
                />
            </div>
        </>
    );
}
