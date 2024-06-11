import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../../widgets/Modal";
import { BuyCoinsModal, CoinsListModal } from "../../widgets/Modal/components";
import { MockCoin } from "../mocks";

const meta: Meta<typeof Modal> = {
    component: Modal,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const BuyCoins: Story = {
    args: {
        children: <BuyCoinsModal coin={MockCoin}/>
    }
}

export const CoinsList: Story = {
    args: {
        children: <CoinsListModal/>
    }
}