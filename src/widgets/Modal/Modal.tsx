import { useContext } from 'react';
import { ModalContext } from './contexts';

interface IModalProps {
    children?: JSX.Element | JSX.Element[];
}

export function Modal({ children }: IModalProps) {
    const { closeModal } = useContext(ModalContext);

    return (
        <>
            <div
                className='fixed top-0 left-0 w-screen h-screen z-40 bg-black opacity-60'
                onClick={() => closeModal()}
            ></div>
            <div
                id='modal'
                className='fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white'
            >
                {children}
            </div>
        </>
    );
}
