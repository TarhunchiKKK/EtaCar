import { Meta, StoryObj } from '@storybook/react';
import { CoinsListItem } from '../../widgets/Modal/components/CoinsListModal/CoinsListItem';
import { MockCoin } from '../mocks';

const meta: Meta<typeof CoinsListItem> = {
    title: 'Widgets/Modal/CoinsListItem',
    component: CoinsListItem,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        coin: { ...MockCoin, count: 5 },
    },
    render: (args) => (
       <div style={{ margin: 'auto', maxWidth: '400px' }}>
            <CoinsListItem {...args} />
       </div>
    ),
};
