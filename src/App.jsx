import { useState } from "react"
import Cart from "./components/Interface"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Products from "./components/Card"
import toast from "react-hot-toast"

function App() {
  const [cart,setCart] = useState([])
  

  const handleAddToCart = (item)=>{
    const newCart = [...cart,item]
    setCart(newCart)
    toast.success('Successfully added product!')
    console.log(newCart)
  }

 
  return (
    <>
      <Header cart={cart}></Header>
      <Products handleAddToCart={handleAddToCart}></Products>
      <Cart cart={cart}></Cart>
      <Footer></Footer>

    </>
  )
}

export default App
