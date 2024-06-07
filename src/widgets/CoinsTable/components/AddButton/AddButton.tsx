interface IAddButtonProps {
    handleClick: () => void;
}

export function AddButton({ handleClick }: IAddButtonProps) {
    return (
        <button
            className='rounded-lg py-2 px-5 bg-green-500 text-white cursor-pointer'
            onClick={handleClick}>
            Add
        </button>
    );
}
