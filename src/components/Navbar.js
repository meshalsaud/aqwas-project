import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Navbar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg p-3 mb-0 px-4 justify-content-between">
                <span className='icon-time icon-2x'></span>
                <div className="container">
                    <span class="navbar-brand mb-0 h1"> وين ناكل؟</span>
                    <span className='icon-food nav-icon'></span>
                </div> 
                <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                 </button>
            </nav>
        )
    }
}
export default Navbar;