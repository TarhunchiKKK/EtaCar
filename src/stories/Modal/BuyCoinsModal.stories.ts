import { Meta, StoryObj } from '@storybook/react';
import { BuyCoinsModal } from '../../widgets/Modal/components';
import { MockCoin } from '../mocks';

const meta: Meta<typeof BuyCoinsModal> = {
    component: BuyCoinsModal,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        coin: MockCoin,
    },
};
