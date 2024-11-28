import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"
import { ProductsPage } from "./pages/ProductsPage"
import { ShoppingCartPage } from "./pages/ShoppingCartPage"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"

export const CarritoApp = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <NavBarComponent />
        <div className="container">
          <Routes>
            <Route path='/' element={<ProductsPage />}></Route>
            <Route path='/cart' element={<ShoppingCartPage />}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductProvider>
  )
}
