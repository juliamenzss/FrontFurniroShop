import { useNavigate } from 'react-router-dom';


function Elements(){
  const navigate = useNavigate();

  const handledNavigation = () => {
    navigate("/")
  }
    return(
        <nav>
        <ul className="hidden sm:text-sm sm:space-x-6 md:text-lg md:flex itens-center justify-center p-2 md:space-x-12 font-medium pr-18">
          <li onClick={handledNavigation} className="transition hover:text-caramel cursor-pointer">
            Home
          </li>
          <li>
            <a href="/shop" className="transition hover:text-caramel">
              Shop
            </a>
          </li>
          <li>
            <a href="/about" className="transition hover:text-caramel">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="transition hover:text-caramel">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    )
}

export { Elements }