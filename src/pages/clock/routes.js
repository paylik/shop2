import React from 'react';
import { Route } from 'react-router';
import ClockPage from './clock';

export default (
    <Route>
        <Route component = { ClockPage } path = { ClockPage.path } />
    </Route>
);
