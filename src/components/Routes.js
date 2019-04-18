import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from './Home';
import Content from './Content';

const BaseRouter =() =>(
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/resturant/" component={Content} />
    </div>
);
export default BaseRouter;