import React from 'react';
import { Route } from 'react-router';
import BowPage from './bow';

export default (
    <Route>
        <Route component = { BowPage } path = { BowPage.path } />
    </Route>
);
