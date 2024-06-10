import { Meta, StoryObj } from '@storybook/react';
import { CoinIcon } from '../../shared';
import { MockCoin } from '../mocks';

const meta: Meta<typeof CoinIcon> = {
    component: CoinIcon,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        rank: MockCoin.rank,
    },
};
