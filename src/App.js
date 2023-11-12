import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import {Routes,Route} from 'react-router-dom';
import About from "./components/About";
import Pricing from "./components/Pricing";
import Faqs from "./components/Faqs";
import Details from "./components/Details";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route
          path="About"
          element={
              <About />
          }
        />
        <Route
          path="FAQs"
          element={
              <Faqs />
          }
        />
        <Route
          path="Pricing"
          element={
              <Pricing />
          }
        />
        <Route
          path="Details/:DetailsId"
          element={
              <Details />
          }
        />
      </Routes>
    </>
  );
}
