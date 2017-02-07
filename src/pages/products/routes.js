import React from 'react';
import { Route } from 'react-router';
import ProductsPage from './products';

export default (
    <Route>
        <Route component = { ProductsPage } path = { ProductsPage.path } />
    </Route>
);
