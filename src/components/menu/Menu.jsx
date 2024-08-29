import { useNavigate } from "react-router-dom";
import Logo from "../../assets/menu/logo.png";
import { Elements } from "./Elements";
import { Icons } from "./Icons";

function Menu() {
  const navigate = useNavigate();
  const handleToHome = () =>{
    navigate('/')
  };
  return (
    <header className="h-12 sm:h-20 flex itens-center justify-between p-5 w-full ">
      <div className="relative flex items-center justify-center space-x-1 ">
        <img
          src={Logo}
          alt="Company logo"
          className="h-4 w-auto md:pl-7 md:h-5"
        />
        <div onClick={handleToHome}>
          <h1 className="font-montserrat font-bold text-lg md:text-2xl cursor-pointer">
            Furniro
          </h1>
        </div>
      </div>

      <Elements />
      <Icons />
    </header>
  );
}
export { Menu };