import { TableRaw } from '../../widgets/CoinsTable/components';
import { Meta, StoryObj } from '@storybook/react';
import { MockCoin } from '../mocks';

const meta: Meta<typeof TableRaw> = {
    title: 'Widgets/CoinsTable/TableRaw',
    component: TableRaw,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        coin: MockCoin,
    },
    render: (args) => (
        <table style={{width: '100%'}}>
            <TableRaw {...args} />
        </table>
    ),
};
