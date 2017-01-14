import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Logo from './logo';

class App extends React.Component {

    constructor(props) {
        super (props);
    }

    render(){
        return (
            <div className="logo">
            <h1>App works!</h1>
        <Logo />
        </div>
    );
    }
}

ReactDom.render(
<App />,
    document.getElementById('app')
);
