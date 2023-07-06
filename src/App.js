import Featured from "./components/featured/Featured";
import BestProduct from "./components/product/BestProduct";
import Services from "./components/services/Services";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'

import './components/product/SpliderExtension.scss';

const App = () => {
  return (
    <div className="">
      <Featured />
      <Services />
      <BestProduct />

      <div style={{ height: '200vh' }}>
      </div>
    </div>
  );
}

export default App;
