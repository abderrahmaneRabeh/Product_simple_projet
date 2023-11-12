import {useEffect, useState} from 'react';
import Product from "./Product";
export default function ProductList(){

    const Api_Url ="https://fakestoreapi.com/products";
    const [product,setProduct] = useState([])
    const [categories,setCategories] = useState([])

    const getProduct= () => {
        fetch(Api_Url)
        .then((result) => result.json())
        .then( (data) => setProduct(data) )
    }
    const getCaterories= () => {
        fetch(`${Api_Url}/categories`)
        .then((result) => result.json())
        .then( (data) => setCategories(data) )
    }
    const getProductsCategories = (categoryName)=>{
        fetch(`${Api_Url}/category/${categoryName}`)
        .then((result) => result.json())
        .then( (data) => setProduct(data) )
    }

    useEffect( () => {
        getProduct();
        getCaterories();
    },[] )
    return (
      <>
        <h2 className="text-center p-4">Our products</h2>
        <div className="container">
          <div className="text-center">
          <button className="btn btn-success p2 m-3" onClick={() => {
                    getProduct();
                  }}
                >
                all
                </button>
            {categories.map((categorie) => {
              return (
                <button
                  key={categorie}
                  className="btn btn-secondary p2 m-3"
                  onClick={() => {
                    getProductsCategories(categorie);
                  }}
                >
                  {categorie}
                </button>
              );
            })}
          </div>
          <div className="row">
            {product.map((product, i) => {
              return (
                <div className="col-3" key={product.id}>
                  <Product product={product} ShowBtn={true} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}