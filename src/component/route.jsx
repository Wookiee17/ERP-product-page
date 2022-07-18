import React, { useEffect, useState } from "react";
import Body from "./body"
import Header from "./header" 
import Banner from "./banner"
import Price from "./price"
import Whyus from "./whyus"
import Footer from "./footer"
import Quotation from "./quotation"
import Product from "./product"
import Contact from './contact';
import Main from "./main"
import { Routes, Route } from 'react-router-dom'

export default function Routes1() {
  
 
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      
      <Route path="/Quotation" element={<Quotation />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Product" element={<Product />}></Route>
    </Routes>
  );
}
