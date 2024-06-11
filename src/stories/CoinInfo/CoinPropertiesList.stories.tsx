import { Meta, StoryObj } from "@storybook/react";
import { CoinPropertiesList } from "../../widgets/CoinInfo/components";
import { MockCoin } from "../mocks";

const meta: Meta<typeof CoinPropertiesList> = {
    title: 'Widgets/CoinInfo/CoinPropertiesList',
    component: CoinPropertiesList,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        coin: MockCoin,
    },
    render: (args) => (
        <div style={{ margin: 'auto', width: 'max-content' }}>
            <CoinPropertiesList {...args} />
        </div>
    ),
};