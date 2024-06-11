import { Meta, StoryObj } from "@storybook/react";
import { CoinProperty } from "../../widgets/CoinInfo/components/CoinProperty";

const meta: Meta<typeof CoinProperty> = {
    title: 'Widgets/CoinInfo/CoinProperty',
    component: CoinProperty,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: "Name",
        value: "Bitcoin",
    },
    render: (args) => (
        <div style={{ margin: 'auto', width: '400px' }}>
            <CoinProperty {...args} />
        </div>
    ),
};