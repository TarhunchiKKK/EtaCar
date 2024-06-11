import { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../widgets';
import { http, HttpResponse, } from 'msw';
import { MockPopularCoins } from '../mocks';

const meta: Meta<typeof Header> = {
    component: Header,
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get('https://api.coincap.io/v2/assets?limit=3', () => {
                    return HttpResponse.json(MockPopularCoins)
                })
            ]
        }
    },
}