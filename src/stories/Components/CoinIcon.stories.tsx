import { Meta, StoryObj } from '@storybook/react';
import { CoinIcon } from '../../shared';
import { MockCoin } from '../mocks';

const meta: Meta<typeof CoinIcon> = {
    title: 'Components/CoinIcon',
    component: CoinIcon,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        rank: MockCoin.rank,
    },
    render: (args) => (
        <div style={{ margin: 'auto', width: 'min-content' }}>
            <CoinIcon {...args} />
        </div>
    ),
};
