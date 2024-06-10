import { createContext, useMemo, useState } from 'react';
import { Modal } from '../Modal';
import { BuyCoinsModal, CoinsListModal } from '../components';
import { ICoin } from '../../../entities';
import { createPortal } from 'react-dom';

const initialState = {
    openCoinsListModal: () => {},
    openBuyCoinsModal: (coin: ICoin) => {},
    closeModal: () => {},
};

export const ModalContext = createContext(initialState);

export function ModalLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentModal, setCurrentModal] = useState<'coins-list' | 'buy-coins' | null>(null);
    const [currentCoin, setCurrentCoin] = useState<ICoin>({} as ICoin);

    const contextValue = useMemo(
        () => ({
            openCoinsListModal: () => {
                setIsOpen(true);
                setCurrentModal('coins-list');
            },
            openBuyCoinsModal: (coin: ICoin) => {
                setIsOpen(true);
                setCurrentModal('buy-coins');
                setCurrentCoin(coin);
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
                return <BuyCoinsModal coin={currentCoin} />;
            case 'coins-list':
                return <CoinsListModal />;
            default:
                return undefined;
        }
    };

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
            {isOpen && createPortal(<Modal>{getModal()}</Modal>, document.body)}
        </ModalContext.Provider>
    );
}
