import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../../widgets/Modal";
import { BuyCoinsModal, CoinsListModal } from "../../widgets/Modal/components";
import { MockCoin } from "../mocks";

const meta: Meta<typeof Modal> = {
    title: 'Widgets/Modal/Modal',
    component: Modal,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const BuyCoins: Story = {
    args: {
        children: <BuyCoinsModal coin={MockCoin}/>
    },
    render: (args) => (
        <div style={{ width: '100%', minHeight:'400px' }}>
            <Modal {...args} />
        </div>
    )
};

export const CoinsList: Story = {
    args: {
        children: <CoinsListModal/>
    },
    render: (args) => (
        <div style={{ width: '100%', minHeight:'200px' }}>
            <Modal {...args} />
        </div>
    )
};