import { Meta, StoryObj } from '@storybook/react';
import { Search } from '../../widgets/CoinsFilterBar/components';

const meta: Meta<typeof Search> = {
    title: 'Widgets/CoinsFilterBar/Search',
    component: Search,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div style={{ margin: 'auto', maxWidth: '600px' }}>
            <Search />
        </div>
    ),
};
