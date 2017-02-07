import React from 'react';
import { Article } from '../../components/index';

export default class HomePage extends React.Component {

    static path = '/';

    render () {
        return (
            <div>
                < Article />
            </div>
        );
    }
}

