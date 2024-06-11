import { Meta, StoryObj } from "@storybook/react";
import { CoinHistoryChart } from "../../widgets";
import { MockHistory } from "../mocks/history";

const meta: Meta<typeof CoinHistoryChart> = {
    component: CoinHistoryChart,
    title: 'Stories/CoinHistoryChart/CoinHistoryChart'
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        history: MockHistory.data
    },
    render: (args) => (
        <div style={{ margin: 'auto' }}>
            <CoinHistoryChart {...args} />
        </div>
    )
};