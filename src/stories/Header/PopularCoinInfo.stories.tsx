import { Meta, StoryObj } from '@storybook/react';
import { PopularCoinInfo } from '../../widgets/Header/components';
import { MockCoin } from '../mocks';

const meta: Meta<typeof PopularCoinInfo> = {
    title: 'Widgets/Header/PopularCoinInfo',
    component: PopularCoinInfo,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        coin: MockCoin,
    },
    render: (args) => (
        <div style={{ margin: 'auto', width: 'min-content' }}>
            <PopularCoinInfo {...args} />
        </div>
    ),
};
