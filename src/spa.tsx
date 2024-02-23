// src/spa.tsx

import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App';
import cssLifecycle from 'vite-plugin-single-spa';

const lc = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: App,
    errorBoundary(err: Error, _info: React.ErrorInfo) {
        return(
            <>
                <div>Error: {err.message}</div>
                <div>Info: {_info.componentStack}</div>
            </>
        )
    }
});

export const bootstrap = [cssLifecycle, lc.bootstrap];
export const mount = [cssLifecycle, lc.mount];
export const unmount = [cssLifecycle, lc.unmount];