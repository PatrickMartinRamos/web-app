import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Link,Navigate } from 'react-router-dom'
//import React, {useState} from 'react';

// page components
import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'


function App() {

  const Products = [
    {
      "id": "1",
      "productName": "Phone",
      "seller": "Seller1",
      "price" : "Php 1000",
      "productDetails": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
    },
    {
      "id": "2",
      "productName": "Book",
      "seller": "Luigi",
      "price" : "Php 1500",
      "productDetails": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
    },
    {
      "id": "3",
      "productName": "Pen",
      "seller": "Mario",
      "price" : "Php 1200",
      "productDetails": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
    }
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Shop</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/list">Shop</NavLink>
        </nav>

        <Routes>
          <Route path="/" element = {<Home Products={Products}/>} />     
          <Route path="/list" element = {<ProductList Products={Products}/>} />                    
          <Route path="/product/:urlId" element ={<Product Products={Products} />} />   
          <Route path="/*" element={<Navigate to="/"/> }/>       
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App
