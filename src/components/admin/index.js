
import React from 'react';
import './styles.less';

export default class Admin extends React.Component {

    static path = '/';

    render () {
        return (
            <div className='admin'>
                <div className='col'>
                    <ul>
                        <li>Item 1</li>
                    </ul>
                    <input type='text' className='form-control'/>
                </div>
            </div>
        );
    }
}

