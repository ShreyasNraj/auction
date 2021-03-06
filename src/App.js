import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Auctions/Auctions";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      <footer>
        <h1>
          <center>Hi!! im Footer</center>
        </h1>
      </footer>
    </CartProvider>
  );
}

export default App;
