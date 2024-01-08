import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProductsPage from './pages/ProductsPage'
import Layout from './components/Layout'
import CartPage from "./pages/CartPage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='products' element={<ProductsPage/>}/>
          <Route path='cart' element={<CartPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
