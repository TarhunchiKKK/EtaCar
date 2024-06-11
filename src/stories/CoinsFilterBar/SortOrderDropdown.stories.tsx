import { Meta, StoryObj } from '@storybook/react';
import { SortOrderDropdown } from '../../widgets/CoinsFilterBar/components';

const meta: Meta<typeof SortOrderDropdown> = {
    title: 'Widgets/CoinsFilterBar/SortOrderDropdown',
    component: SortOrderDropdown,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div style={{ margin: 'auto', width: 'min-content' }}>
            <SortOrderDropdown />
        </div>
    ),
};
