import React from 'react';
import { Route } from 'react-router';
import JenaviPage from './jenavi';

export default (
    <Route>
        <Route component = { JenaviPage } path = { JenaviPage.path } />
    </Route>
);
