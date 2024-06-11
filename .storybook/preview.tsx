import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/index.css';
import { Provider }  from 'react-redux';
import { store } from '../src/app/index'
import {  ModalLayout } from '../src/widgets/Modal';
import { BrowserRouter } from 'react-router-dom';
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Provider store={store}>
                <BrowserRouter>
                    <ModalLayout>
                        <Story/>
                    </ModalLayout>
                </BrowserRouter>
            </Provider>
        )
    ],
    loaders:[mswLoader],
};

export default preview;
