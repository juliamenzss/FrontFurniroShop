import { useDispatch, useSelector } from "react-redux";
import trash from "../../assets/trash.png";
import { decrementQuantity, incrementQuantity, removeProduct } from "../../store/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../axios/axiosConfig";


function CartTotal() {

  const cartItems = useSelector(state => state.cart?.cart || [])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(false);


  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  useEffect(() => {
    const checkStatus = async () => {
      const token = sessionStorage.getItem("jwt_token"); 
      if (token) {
        try {
          const response = await api.get('/auth/verify', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setLoggedUser(response.status === 200);
        } catch (error) {
          console.error("Token verification failed:", error);
          setLoggedUser(false);
          sessionStorage.removeItem('jwt_token');
        }
      } else {
        setLoggedUser(false);
      }
    };

    checkStatus();
  }, [])

  const handleCheckout = () => {
    if(loggedUser) {
      navigate('/checkout')
    } else {
      navigate('/login');
    }
  }

  return (
    <section className="my-20 w-screen flex flex-row gap-4 justify-evenly xl:w-10/12">
    <section className="flex-col md:flex-row flex">
      <table className="w-full border-collapse">
        <thead className="bg-light-salmon">
          {cartItems.length !== 0 && (<tr className="">
            <th className="text-sm font-semibold"></th>
            <th className="py-4 text-sm font-medium">Product</th>
            <th className="text-sm font-medium">Price</th>
            <th className="text-sm font-medium">Quantity</th>
            <th className="text-sm font-medium">Subtotal</th>
            <th className="text-sm font-medium"></th>
          </tr>)}
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4">
                <p className="py-4 font-medium text-lg">Your cart is empty.</p>
                <div className=" pt-4">
                <button
                    className=" border-2 border-caramel font-semibold h-20 w-64 transition bg-caramel rounded-2xl hover:bg-white  text-white hover:text-caramel"
                    onClick={() => navigate('/')}>
                    Click and go to shop
                  </button>
                </div>
              </td>
            </tr>
          ) : (
            <>
            {cartItems.map((item) => (
              <tr key={item.id} className="">
                <td className="ml-2 py-8 w-10 h-10 pl-2 sm:w-24">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 sm:w-24 sm:h-24 rounded-md object-cover"/>
                </td>
                <td className="px-2 sm:px-8 text-xs text-gray-light">{item.name}</td>
                <td className="px-2 sm:px-8 text-xs text-gray-light">
                  Rs. {item.price.toFixed(2)}
                </td>
                <td className="py-1 w-14 mt-10 sm:w-16 sm:mt-[150px] bottom-0 text-gray-light border
                 flex text-sm justify-between pr-1 pl-1 items-center rounded-lg">
                     <button
                  type="button"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  disabled={item.quantity <= 1}
                  className={`inline-flex items-center justify-center${item.quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                  >-</button>
                <input
                  type="text"
                  id="counter-input"
                  data-input-counter
                  className=" border-0 bg-transparent text-sm font-normal max-w-[2rem] text-center"
                  value={item.quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <button
                  type="button"
                  id="increment-button"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  className={`inline-flex items-center justify-center${item.quantity} "opacity-50 cursor-not-allowed " : ""}`}
                >+</button>
                </td>
                <td className="px-2 sm:px-8 text-xs sm:text-sm">
                  Rs. {(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="px-2 sm:px-8 cursor-pointer w-10 sm:w-24">
                  <button onClick={() => dispatch(removeProduct(item.productSkuId))}>
                    <img
                    src={trash}
                    alt="Delete"
                    className="w-4 h-4 object-cover"/>
                    </button>
                </td>
              </tr>
            ))}
            </>
          )}
        </tbody>
      </table>
      {
        cartItems.length !== 0 &&
        (<section className=" bg-light-salmon p-4 mt-20 lg:w-72 xl:w-96 xl:pb-12 flex flex-col justify-center lg:items-center md:rounded-2xl">
          <h1 className="text-xl font-medium md:text-3xl md:font-semibold mb-2 lg:mb-6">Cart Totals</h1>
          <div className="lg:hidden border-t w-full mb-8 text-gray-light"></div>
          <div className="pb-6 flex mb-2 w-full justify-between lg:justify-around">
            <h2 className="text-sm font-medium">Subtotal</h2>
            <h3 className="text-sm text-gray-light">Rs.{(total).toFixed(2)}</h3>
          </div>
          <div className="pb-6 flex mb-2 w-full justify-between lg:justify-around">
            <h2 className="text-sm font-medium">Total</h2>
            <h3 className="text-lg text-caramel font-semibold">Rs. {(total).toFixed(2)}</h3>
          </div>
  
  
  
          <button onClick={handleCheckout} className="text-lg transition hover:bg-caramel hover:text-white border md:text-xl py-4 md:px-5 rounded-xl">
            {loggedUser ? "Checkout" : "Login to checkout"}
          </button>
        </section>)
      }
      
    </section>
  </section>
  );
}

export { CartTotal };