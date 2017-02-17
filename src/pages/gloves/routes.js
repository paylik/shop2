import React from 'react';
import { Route } from 'react-router';
import GlovesPage from './gloves';

export default (
    <Route>
        <Route component = { GlovesPage } path = { GlovesPage.path } />
    </Route>
);
