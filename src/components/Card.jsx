import { useEffect, useState } from "react"

export default function Products(props) {
  const {handleAddToCart} = props
  // console.log(props)
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch("./products.JSON")
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  // console.log(products)



  return (
   <div >
    <h1 className="text-center text-4xl m-10 text-green-500 font-bold">Products Item</h1>
        
  <div className="grid grid-cols-3 gap-5">
  {
      products.map(product=><div className="card bg-base-100 w-96 shadow-xl">

        <img src="https://img.freepik.com/free-photo/clothing-elegance-white-fashion-modern_1203-6524.jpg?t=st=1729186524~exp=1729190124~hmac=3b9373113031541ef3f80895d26787465615af21c984cfd938428bf27b543a26&w=740" alt="" />
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <p>$ {product.price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(product)} className="btn btn-primary text-white bg-green-500">Buy Now</button>
          </div>
        </div>
      </div>)
    }
  </div>
   </div>
  )
}
