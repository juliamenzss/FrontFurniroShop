import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../axios/axiosConfig";

function Bottom() {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(false);


  
  useEffect(() => {
    const token = sessionStorage.getItem("jwt_token");
    if (token) {
      api.get('/auth/verify', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setLoggedUser(response.status === 200);
        })
        .catch(() => {
          setLoggedUser(false);
          sessionStorage.removeItem('token');
        });
    } else {
      setLoggedUser(false);
    }
  }, []);

  const handleNavCart = () => {
    navigate("/cart");
  };

  const handleCheckout = () => {
    if (loggedUser) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="border-b opacity-20 w-80 absolute"></div>
      <div className="mr-2">
        <div className="m-4 flex py-4">
          <button
            onClick={handleNavCart}
            className="px-6 py-1 border rounded-full text-xs flex transition hover:bg-caramel hover:text-white"
          >
            Cart
          </button>
          <button
            onClick={handleCheckout}
            className="px-6 py-1 border rounded-full text-xs flex transition hover:bg-caramel hover:text-white"
          >
            {loggedUser ? "Checkout" : "Login to Checkout"}
          </button>
          <button className="px-6 py-1 border rounded-full text-xs flex transition hover:bg-caramel hover:text-white">
            Comparison
          </button>
        </div>
      </div>
    </div>
  );
}

export { Bottom };