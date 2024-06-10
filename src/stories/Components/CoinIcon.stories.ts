import { Meta, StoryObj } from '@storybook/react';
import { CoinIcon } from '../../shared';

const meta: Meta<typeof CoinIcon> = {
    component: CoinIcon,
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        rank: '1'
    }
}