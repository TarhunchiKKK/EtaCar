import { Outlet } from 'react-router-dom';
import { Header } from '../widgets';
import { ModalLayout } from '../widgets/Modal';

export function Layout() {
    return (
        <ModalLayout>
            <Header />
            <Outlet />
        </ModalLayout>
    );
}
