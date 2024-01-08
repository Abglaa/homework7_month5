import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/productsSlice"
import {addProduct} from "../redux/cartSlice.js";

export default function ProductsPage() {

  const dispatch = useDispatch()
  const {products} = useSelector(state => state.productsReducer)


  useEffect(()=> {
    dispatch(fetchProducts())
  }, [])
    
  return (
    <div>
      <h1>Store</h1>
      {products?.products?.map(item => (
        <div key={item.id}>
          <img src={item.images[0]} alt="image" />
          <p>{item.brand}</p>
          <p>{item.price}</p>
          <button onClick={()=>{dispatch(addProduct(item))}}>Купить</button>
        </div>
      ))}
    </div>
  )
}
