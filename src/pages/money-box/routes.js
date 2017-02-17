import React from 'react';
import { Route } from 'react-router';
import BoxPage from './box';

export default (
    <Route>
        <Route component = { BoxPage } path = { BoxPage.path } />
    </Route>
);
