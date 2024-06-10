import { Meta, StoryObj } from '@storybook/react';
import { Loader } from '../../shared';

const meta: Meta<typeof Loader> = {
    component: Loader,
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {}
