import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../assets/menu/profile.png";
import { BsPersonSquare } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { Cart } from "./Cart";
import { CartBar } from "../cartBar/Cart";
import { Hamburguer } from "./Hamburguer";
import { api } from "../../axios/axiosConfig";  // Importe o api aqui

function Icons() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);
  const navigate = useNavigate();

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

  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const toggleMenu = () => {
    setMenuOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const handleNavigation = () => {
    if (!loggedUser) {
      navigate("/login");
    }
  };

  return (
    <nav className="items-center flex">
      <ul className="gap-3 pr-4 flex justify-center items-start md:pr-7 relative">
        {!loggedUser ? (
          <li onClick={handleNavigation}>
            <img src={Profile} alt="Profile button" className="mt-1 h-4 md:h-5 cursor-pointer" />
          </li>
        ) : (
          <li>
            <BsPersonSquare className="text-2xl" />
          </li>
        )}

        <li className="cursor-pointer text-xl md:text-2xl">
          <Cart toggleCart={toggleCart} />
        </li>

        <li className="flex md:hidden text-2xl cursor-pointer ">
          <IoMenu onClick={toggleMenu} />
          {menuOpen && <Hamburguer toggleMenu={toggleMenu} />}
        </li>
      </ul>

      {isCartOpen && <CartBar click={toggleCart} />}
    </nav>
  );
}

export { Icons };

