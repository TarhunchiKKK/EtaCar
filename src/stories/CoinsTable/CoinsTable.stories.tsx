import { Meta, StoryObj } from '@storybook/react';
import { CoinsTable } from '../../widgets';
import { MockCoins } from '../mocks';

const meta: Meta<typeof CoinsTable> = {
    title: 'Widgets/CoinsTable/CoinsTable',
    component: CoinsTable,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        coins: MockCoins.data,
    },
    render: (args) => (
        <div style={{ margin: 'auto', maxWidth: '90%' }}>
            <CoinsTable {...args} />
        </div>
    ),
};
