import { Meta, StoryObj } from '@storybook/react';
import { PortfolioInfo } from '../../widgets/Header/components';

const meta: Meta<typeof PortfolioInfo> = {
    title: 'Widgets/Header/PortfolioInfo',
    component: PortfolioInfo,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div style={{ margin: 'auto', width: 'min-content' }}>
            <PortfolioInfo />
        </div>
    ),
};