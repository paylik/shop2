import React from 'react';
import { Route } from 'react-router';
import PursePage from './purse';

export default (
    <Route>
        <Route component = { PursePage } path = { PursePage.path } />
    </Route>
);
