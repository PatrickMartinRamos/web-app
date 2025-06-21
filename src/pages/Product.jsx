//import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
//import { useFetch } from "../hooks/useFetch"

export default function ProductDetails({Products}) {
  const { urlId } = useParams()

  const navigate = useNavigate()

  const _product = Products.find( ({ id }) => id === urlId);

  console.log("id: " + urlId)
  console.log(_product)

  if (!_product) {
    setTimeout(() => {
      // history.goBack()
      //history.push('/')
      navigate('/');
    }, 2000)
  }

  return (
    <div>
      {!_product && <p>No Product found!</p>}
      {_product && (
        <div key={_product.id}>
          <h2>{_product.productName}</h2>
          <p>Seller Name {_product.seller}</p>
          <p>{_product.productDetails }</p>
        </div>
      )}
    </div>
  )
}
