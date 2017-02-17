import React from 'react';
import { Route } from 'react-router';
import GlassPage from './glass';

export default (
    <Route>
        <Route component = { GlassPage } path = { GlassPage.path } />
    </Route>
);
