import { Meta, StoryObj } from "@storybook/react";
import { CoinPage } from "../../pages";
import { http, HttpResponse } from "msw";
import { MockCoin } from "../mocks";
import { MockHistory } from "../mocks/history";

const meta: Meta<typeof CoinPage> = {
    title: 'Pages/CoinPage',
    component: CoinPage,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get('https://api.coincap.io/v2/assets/bitcoin', () => {
                    return HttpResponse.json({ data: MockCoin });
                }),
                http.get('https://api.coincap.io/v2/assets/bitcoin/history', () => {
                    return HttpResponse.json(MockHistory);
                }),
            ],
        },
    },
};