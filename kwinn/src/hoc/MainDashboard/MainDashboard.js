import React, { Component } from 'react';
import classes from  './MainDashboard.css';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';




class MainDashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        
    }


    render() {
        return(<div >
            <Toolbar/>
        
           
            <Footer/>
            </div>)
    }


}

export default MainDashboard;