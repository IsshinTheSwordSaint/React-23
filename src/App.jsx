import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import './index.css';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      zad2
      <Hero />
      zad3
      <ProductGrid />
    </>
  );
}

export default App;
