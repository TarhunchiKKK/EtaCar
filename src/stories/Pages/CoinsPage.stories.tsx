import { Meta, StoryObj } from "@storybook/react";
import { CoinsPage } from "../../pages";
import { http, HttpResponse } from "msw";
import { MockCoinsCount } from "../mocks/coins-count";
import { MockCoins } from "../mocks";

const meta: Meta<typeof CoinsPage> = {
    title: 'Pages/CoinsPage',
    component: CoinsPage,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get('https://api.coincap.io/v2/assets?limit=2000', () => {
                    return HttpResponse.json(MockCoinsCount);
                }),
                http.get('https://api.coincap.io/v2/assets?limit=20', () => {
                    return HttpResponse.json(MockCoins);
                }),
            ],
        },
    },
};