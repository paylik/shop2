import React from 'react';
import { Route } from 'react-router';
import JevelyPage from './jevely';

export default (
    <Route>
        <Route component = { JevelyPage } path = { JevelyPage.path } />
    </Route>
);
