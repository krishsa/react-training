import React, { Component } from 'react'
import Headers from './Headers';
import RightMenu from './RightMenu';
import LeftMenu from './LeftMenu';
import Footer from './Footer';
import Content from './Content';

export default class HomePage extends Component{
    render(){
        return(
            <div>
                <Headers />
                <RightMenu />
                <LeftMenu />
                <Content />
                <Footer />
            </div>
        );
    }
}