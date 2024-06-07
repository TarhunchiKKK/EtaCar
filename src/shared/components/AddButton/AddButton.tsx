interface IAddButtonProps {
    title: string;
    handleClick: () => void;
}

export function AddButton({ title, handleClick }: IAddButtonProps) {
    return (
        <button
            className='rounded-lg py-2 px-5 bg-green text-white'
            onClick={handleClick}>
            {title}
        </button>
    );
}
