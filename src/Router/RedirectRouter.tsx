import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails'

function RedirectRouter() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" index element={<Home />} />
        <Route path="/product" >
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Route>
      </Routes>
     {/* <Route element={<RouteGuard />}>
        <Route path="/profile" element={<Profile />} />
      </Route>  */}
  </BrowserRouter>
  )
}

export default RedirectRouter