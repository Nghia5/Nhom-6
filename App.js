import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Nav from './nav';
import Productdetail from './productdetail';
import Rout from './rout';
export const App = () => {
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (product) =>
  {
    const change = Productdetail.filter((x) =>
    {
      return x.Cat === product
    })
    setProduct(change)
  }
  const view = (product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }
  return (
    <>
    <BrowserRouter>
      <Nav searchbtn={searchbtn} />
      <Rout product={product} setProduct ={setProduct} detail={detail} view={view} close={close} setClose ={setClose}/>
      <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;