import React from 'react';
import '../../css/Inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import $ from 'jquery';
import Popper from 'popper.js'; */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Ingredients from './components/Ingredients';
import Products1 from './components/Products1';
import Banner3 from './components/Banner3';
import Album from "./components/Album";
import Banner4 from './components/Banner4';
import Price from "./components/Price";
import Footer from "./components/Footer";

export default function Inicio() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Banner2/>
    <Ingredients/>
    <Products1/>
    <Banner3/>
    <Album/>
    <Banner4/>
    <Price/>
    <Footer/>
    </>
  );
}


