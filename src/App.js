import React, { useState } from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  };

  return (
    <>
      {cartVisible && <Cart onClose={hideCartHandler} />}
      <Header itemsQuantity={0} onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
