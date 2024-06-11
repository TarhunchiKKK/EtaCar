import { Meta, StoryObj } from '@storybook/react';
import { LimitDropdown } from '../../widgets/CoinsFilterBar/components';

const meta: Meta<typeof LimitDropdown> = {
    component: LimitDropdown,
};
export default meta;

type Story = StoryObj<typeof LimitDropdown>;

export const Default: Story = {
    render: () => (
        <div style={{ margin: 'auto', width: 'min-content' }}>
            <LimitDropdown />
        </div>
    )
};
