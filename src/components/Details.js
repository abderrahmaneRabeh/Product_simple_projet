import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

export default function Details() {
    const api_url = 'https://fakestoreapi.com/products';
    const [product,setProduct] = useState([])
    const param = useParams();
    useEffect( ()=>{
        fetch(`${api_url}/${param.DetailsId}`)
        .then((result)=>result.json())
        .then((data)=>setProduct(data))
    } )
    console.log(param)
  return (
    <>
        <Product product={product} ShowBtn={false} />
    </>
  )
}
