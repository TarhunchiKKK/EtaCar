import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/index.css';
import { Provider }  from 'react-redux';
import { store } from '../src/app/index'
import {  ModalLayout } from '../src/widgets/Modal';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

initialize();

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        reactRouter: reactRouterParameters({
            location: {
                pathParams: {
                    id: 'bitcoin',
                },
            },
            routing: {
                path: 'coins/:id',
            },
        }),
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Provider store={store}>
                <ModalLayout>
                    <Story/>
                </ModalLayout>
            </Provider>
        ),
        withRouter,
    ],
    loaders:[mswLoader],
};

export default preview;
