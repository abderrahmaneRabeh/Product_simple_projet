import { Link } from "react-router-dom";
export default function Navbar(){
    return (
      <>
        
          <header className=" bg-dark ">
          <div className="container">
          <div className='d-flex  align-items-center justify-content-center  py-3'>
          <ul className="nav nav-pills">
              <li className="nav-item px-3">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link to="Pricing" className="nav-link text-white">
                  Pricing
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link to="FAQs" className="nav-link text-white">
                  FAQs
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link to="About" className="nav-link text-white">
                  About us
                </Link>
              </li>
            </ul>
          </div>  
            
          </div>
          </header>
      </>
    );
}