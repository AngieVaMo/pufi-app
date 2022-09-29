import Home from "../src/components/Home";
import PufiRain from "../src/components/PufiRain";
import PufiPuff from "../src/components/PufiPuff";
import PufiCart from "../src/components/PufiCart";
import PufiNap from "../src/components/PufiNap";
import Subscription from "../src/components/Subscription";
import Footer from "../src/components/Footer";


export default function App() {
  return (
    <div>
      <div>
        <Home/>
      </div>

      <div>
        <PufiRain/>
      </div>

      <div>
        <PufiPuff/>
      </div>

      <div>
        <PufiCart/>
      </div>

      <div>
        <PufiNap/>
      </div>

      <div>
        <Subscription/>
      </div>

      <div>
        <Footer/>
      </div>
      
    </div>
  );
}