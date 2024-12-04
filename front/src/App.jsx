import { useState } from 'react'
import './App.css'
import NewPassword from './pages/LoginNewPass'
import ResetPassword from './pages/ResetPass'
import ResetPasswordEmailSent from './pages/ResetPassEmailed'
import Home from "./pages/Home"
import ProductDetail from './pages/ProductInfor'
import Account from "./pages/AccountPage"
import CheckOut from './pages/Checkout'
import EditInfo from './pages/EditInfor'
import FavoriteList from './pages/Favourite'
import PaymentPage from './pages/Payment'
import { Routes, Route } from "react-router-dom"
import Shipping from './pages/Shipping'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/new-password' element={<NewPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/reset-password/emailed' element={<ResetPasswordEmailSent />} />
      <Route path='/' element={<Home />} />
      <Route path='/product-detail' element={<ProductDetail />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/editInfor" element={<EditInfo />} />
      <Route path='/shipping' element={<Shipping />} />
      <Route path='shipping/checkout' element={<CheckOut />} />
      <Route path='/favourite' element={<FavoriteList />} />
      <Route path='/payment' element={<PaymentPage />} />
    </Routes>
    </>
  )
}

export default App