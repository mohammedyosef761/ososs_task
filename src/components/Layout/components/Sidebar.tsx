import React from "react";
import { useSidebarContext } from "../../../context";
import { CartItem } from "../../CartItem";
import { useCartLogic } from "../hooks/useCartLogic";
import { usePurchase } from "../hooks/usePurchase";
import { Loader } from "../../Loader";

export const Sidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarContext();
  const { cart, clearCart, handleQuantityChange, removeFromCart, total } =
    useCartLogic();
  const { handlePurchase, loading } = usePurchase(
    cart,
    clearCart,
    toggleSidebar
  );

  return (
    <>
      {loading && <Loader />}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleQuantityChange={handleQuantityChange}
            removeFromCart={removeFromCart}
          />
        ))}
        <div style={{ marginBottom: "50px" }}>Total: ${total.toFixed(2)}</div>
        <button style={{ marginBottom: "70px"}} onClick={handlePurchase}>
          Purchase
        </button>
      </aside>
    </>
  );
};
