import React, { Component } from 'react'
import Header from './commons/Header';

export default class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <section className='container'>
                    <Header />
                    <div className='wrapper'>
                        {this.props.children}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
