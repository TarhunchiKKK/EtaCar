import { Meta, StoryObj } from '@storybook/react';
import { Loader } from '../../shared';

const meta: Meta<typeof Loader> = {
    title: 'Components/Loader',
    component: Loader,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div style={{ width: '100%', minHeight: '200px' }}>
            <Loader />
        </div>
    ),
};
