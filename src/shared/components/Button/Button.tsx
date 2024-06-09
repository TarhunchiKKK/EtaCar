interface IButtonProps {
    handleClick: (e: React.MouseEvent) => void;
    content: string;
    color: string;
}

export function Button({ handleClick, content, color }: IButtonProps) {
    return (
        <button
            style={{ backgroundColor: color }}
            className='rounded-lg w-full px-2 py-2 text-white cursor-pointer'
            onClick={handleClick}>
            {content}
        </button>
    );
}
