import React, {Component} from 'react';
import '../App.css';

class TopContent extends Component{
    render(){
        const {name, cat, rating} = this.props.data
        return(
            <div className='container-fluid text-center top-section'>
            <div class="d-flex flex-column justify-content-center">
                <div class="p-1 item1">
                <h2>
                {name}
                </h2>
                    </div>
                <div class="p-1 item2">
                    <span>{rating}/10 - {cat}</span>
                </div>
                <div class="d-flex content-icons justify-content-center p-2">
                    <div class="px-3 border-right">
                        <span class="icon-map-marker icon-2x " aria-hidden="true"></span>
                    </div>
                    <div class="px-3 border-right ">
                        <span className='icon-external-link icon-2x'></span>
                    </div>

                    <div class="px-3 border-right">
                        <span className='icon-heart icon-2x '></span>
                    </div>
                    <div class="px-3 border-right ">
                        <span className='icon-picture icon-2x '></span>
                    </div>
                    <div class="px-3 border-left">
                        <span className='icon-exclamation-sign icon-2x '></span>
                    </div>
                <div>
                </div>
                </div>
                <div class="p-1 border-top mt-2 item2">
                <span className='icon-chevron-up icon-2x'></span>
                </div>
            </div>
            </div>
        )
    }
}
export default TopContent;