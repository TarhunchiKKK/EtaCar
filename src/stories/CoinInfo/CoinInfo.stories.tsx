import { Meta, StoryObj } from "@storybook/react";
import { CoinInfo } from "../../widgets";
import { MockCoin } from "../mocks";

const meta: Meta<typeof CoinInfo> = {
    component: CoinInfo,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        coin: MockCoin,
    },
    render: (args) => (
        <div style={{ margin: 'auto', width: 'max-content' }}>
            <CoinInfo {...args} />
        </div>
    ),
};