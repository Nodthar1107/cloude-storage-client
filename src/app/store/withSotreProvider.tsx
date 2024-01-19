import * as React from 'react';
import { Provider, useSelector } from 'react-redux';
import { ApplicationState, store } from '.';

export function withStoreProvider<P extends object>(Component: React.ComponentType<P>) {
    return (props: P) => {
        return (
            <Provider store={store}>
                <Component {...props} />
            </Provider>
        )
    }
}
