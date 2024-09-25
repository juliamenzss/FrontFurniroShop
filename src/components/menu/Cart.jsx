import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Cart({ toggleCart }) {
  const cartItems = useSelector((state) => state.cart.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div>
      <button onClick={toggleCart}>
        <AiOutlineShoppingCart />
      </button>

      {getTotalQuantity() >= 1 && (
        <span className="-top-1 right-10 sm:-top-2 bottom-0 sm:right-2 absolute  md:right-4 ">
          <p className="h-4 w-4 flex rounded-full bg-red-800 items-center justify-center text-white text-[9px]">
            {getTotalQuantity()}
          </p>
        </span>
      )}
    </div>
  );
}

export { Cart };