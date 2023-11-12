import { Link } from "react-router-dom";
import './slider.css';
export default function Product(props){
    const {product,ShowBtn} = props;
    return (
      <>
      <div className="card my-1">
          <img src={product.image} className="card-img-top " alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text card-text">{product.description}</p>
            {ShowBtn && <Link to={`Details/${product.id}`} className="btn btn-primary" >more info</Link>}
            <p>price: {product.price}$</p>
          </div>
        </div>
      </>
    );
}