interface ICoinPropertyProps {
    name: string;
    value: string | number;
}

export function CoinProperty({ name, value }: ICoinPropertyProps) {
    return (
        <div className='w-full flex flex-row justify-between items-center py-2 border-b-2 border-gray-400'>
            <span className='text-lg text-gray-600'>{name}</span>
            <span className='text-lg font-bold'>{value}</span>
        </div>
    );
}
