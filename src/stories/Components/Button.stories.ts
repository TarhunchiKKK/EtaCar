import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../shared';
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
    component: Button,
    args: {
        handleClick: fn()
    }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const AddButton: Story = {
    args:{
        content: 'Add',
        color: 'rgb(74 222 128)'
    }
}

export const BackButton: Story = {
    args: {
        content: 'Back',
        color: 'rgb(67 56 202)'
    }
}