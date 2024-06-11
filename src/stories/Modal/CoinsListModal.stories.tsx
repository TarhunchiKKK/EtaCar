import { Meta, StoryObj } from '@storybook/react';
import { CoinsListModal } from '../../widgets/Modal/components';

const meta: Meta<typeof CoinsListModal> = {
    component: CoinsListModal,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Defaukt: Story = {
    render: () => (
        <div style={{ margin: 'auto', width: 'max-content' }}>
            <CoinsListModal />
        </div>
    )
};
