// Node modules import
import React, { Component } from 'react';

// Component import
import Header from './header';

// Layout component
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="container">
                    <h3>
                        {this.props.children}
                    </h3>
                </div>
            </div>
        );

    }
}
