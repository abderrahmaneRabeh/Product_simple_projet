import './slider.css';
export default function Slider(){
    return (
      <>
        <div
          id="carouselExampleControls"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="i1.jpg" className="d-block w-100 height" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="i2.jpg" className="d-block w-100 height" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="i3.jpg" className="d-block w-100 height" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
}