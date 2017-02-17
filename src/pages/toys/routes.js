import React from 'react';
import { Route } from 'react-router';
import ToysPage from './toys';

export default (
    <Route>
        <Route component = { ToysPage } path = { ToysPage.path } />
    </Route>
);
