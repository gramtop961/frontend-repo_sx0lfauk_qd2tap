import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Newsletter from "./components/Newsletter.jsx";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <ProductGrid onAdd={handleAddToCart} />
        <Newsletter />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Flames Shop. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900 transition">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition">Terms</a>
            <a href="#" className="hover:text-slate-900 transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
