import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        };

    }
    render(){
        return (
            <div>
                <Header />
                <SideBar />
            </div>
        );
    }
}

export default App;
