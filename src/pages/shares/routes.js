import React from 'react';
import { Route } from 'react-router';
import SharesPage from './shares';

export default (
    <Route>
        <Route component = { SharesPage } path = { SharesPage.path } />
    </Route>
);
