import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

import { HomePage, HomeRoutes } from './pages/home/index';
import { CertificateRoutes } from './pages/certificate/index';
import { GuaranteesRoutes } from './pages/guarantees/index';
import { ProductsRoutes } from './pages/products/index';
import { SharesRoutes } from './pages/shares/index';
import { VideoRoutes } from './pages/video/index';
import { ContactRoutes } from './pages/contact/index';
import { BowRoutes } from './pages/bow/index';
import { ClockRoutes } from './pages/clock/index';
import { GlassRoutes } from './pages/glass/index';
import { GlovesRoutes } from './pages/gloves/index';
import { JenaviRoutes } from './pages/jenavi/index';
import { JevelyRoutes } from './pages/jevely/index';
import { BoxRoutes } from './pages/money-box/index';
import { PurseRoutes } from './pages/purse/index';
import { ToysRoutes } from './pages/toys/index';


import  ErrorPage from './pages/error/index';

export default (
    <Route component={ App } path={ App.path }>
        <IndexRoute component = { HomePage } />
        
        { HomeRoutes }
        { ContactRoutes }
        { CertificateRoutes }
        { GuaranteesRoutes }
        { ProductsRoutes }
        { SharesRoutes }
        { VideoRoutes }
        { BowRoutes }
        { ClockRoutes }
        { GlassRoutes }
        { GlovesRoutes }
        { JenaviRoutes }
        { JevelyRoutes }
        { BoxRoutes }
        { PurseRoutes }
        { ToysRoutes }
            

        <Route path = '*' component = { ErrorPage }/>
    </Route>
);
