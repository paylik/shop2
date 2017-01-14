import React, {Component} from 'react';
import ReactDom from 'react-dom';

export default class Logo extends React.Component {

    constructor(props) {
        super (props);
    }

    render(){
        return (
            <div className="logo">
            <h1>Logo</h1>
            </div>
    );
    }
}

