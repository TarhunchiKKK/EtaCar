import { Meta, StoryObj } from '@storybook/react';
import { CoinsFilterBar } from '../../widgets';

const meta: Meta<typeof CoinsFilterBar> = {
    title: 'Widgets/CoinsFilterBar/CoinsFilterBar',
    component: CoinsFilterBar,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
