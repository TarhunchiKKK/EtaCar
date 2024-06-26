import { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from "../../pages";

const meta: Meta<typeof ErrorPage> = {
    title: 'Pages/ErrorPage',
    component: ErrorPage,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};