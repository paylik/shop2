import React from 'react';
import { Route } from 'react-router';
import GuaranteesPage from './guarantees';

export default (
    <Route>
        <Route component = { GuaranteesPage } path = { GuaranteesPage.path } />
    </Route>
);
