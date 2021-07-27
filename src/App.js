import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './index.min.css';
import Home from './Home';
import Category from './Category';
import Product from './Product';
import Offers from './Offers';
import Navbar from './Navbar';
import Footer from './Footer';

import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';


const App = () =>{
  return(
    <>
      <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route exact  path='/' component={Home} />
        <Route exact path='/category' component={Category} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/offers' component={Offers} />
        <Redirect to="/" ></Redirect>
      </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App;