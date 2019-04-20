import React, {Component} from 'react';
import Navbar from './Navbar';
import MapContent from './MapContent';
import TopContent from './TopContent';
import '../App.css';


class Content extends Component{
    render(){
        return (
            <div>
                <Navbar />
                <TopContent />
                <MapContent />
            </div>

        )
    }
}
export default Content;