interface IAddButtonProps {
    handleClick: () => void;
}

export function AddButton({ handleClick }: IAddButtonProps) {
    return (
        <button className='rounded-lg w-full px-2 py-2 bg-green-500 text-white cursor-pointer' onClick={handleClick}>
            Add
        </button>
    );
}
