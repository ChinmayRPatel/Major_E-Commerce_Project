import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/footer/Footer";
import Product from "./customer/components/Product/Product.jsx";

function App() {
  return (
    <div className="App relative">
      <Navigation />
      <div className="mt-16"> {/* Adjust the margin to prevent content from hiding behind the navbar */}
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>

  );
}

export default App;
