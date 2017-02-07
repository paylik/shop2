import React from 'react';
import { Route } from 'react-router';
import CertificatePage from './certificate';

export default (
    <Route>
        <Route component = { CertificatePage } path = { CertificatePage.path } />
    </Route>
);
