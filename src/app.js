import React, { PropTypes } from 'react';
import { Header } from './components/index';
import { Footer } from './components/index';
import { DevTools } from './utils/index';

export default class App extends React.Component {

    static PropTypes = {
        children: PropTypes.any.isRequired
    };
    static path = '/';

    render() {
        return (
            <div className='page'>
                < Header />
                { this.props.children }
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
                < Footer />
            </div>
        );
    }
}
