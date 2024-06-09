import { createContext, useMemo, useState } from 'react';
import { Modal } from '../Modal';
import { BuyCoinsModal, CoinsListModal } from '../components';

const initialState = {
    openCoinsListModal: () => {},
    openBuyCoinsModal: () => {},
    closeModal: () => {},
};

export const ModalContext = createContext(initialState);

export function ModalLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentModal, setCurrentModal] = useState<'coins-list' | 'buy-coins' | null>(null);

    const contextValue = useMemo(
        () => ({
            openCoinsListModal: () => {
                setIsOpen(true);
                setCurrentModal('coins-list');
            },
            openBuyCoinsModal: () => {
                setIsOpen(true);
                setCurrentModal('buy-coins');
            },
            closeModal: () => {
                setIsOpen(false);
                setCurrentModal(null);
            },
        }),
        [],
    );

    const getModal = () => {
        switch (currentModal) {
            case 'buy-coins':
                return <BuyCoinsModal />;
            case 'coins-list':
                return <CoinsListModal />;
            default:
                return undefined;
        }
    };

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
            {isOpen && <Modal>{getModal()}</Modal>}
        </ModalContext.Provider>
    );
}
