import { Link } from 'react-router-dom'
//import { useFetch } from '../hooks/useFetch'

// styles
import './ProductList.css'

export default function Home({Products}) {

  return (
    <div className="product">
      <h2>Porducts</h2>      
        {Products && Products.map(Products => (
            <div key={Products.id} className="card">
            <h3>{Products.productName}</h3>
            <p>Price: {Products.price}</p>
            <p>Seller Name: {Products.seller}</p>
            <Link to={`/Product/${Products.id}`}>View Item.</Link>
        </div>
      ))}
    </div>
  )
}
