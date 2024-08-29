import { IoMdClose } from "react-icons/io";

function Hamburguer({toggleMenu}) {
    return (
      <nav className="fixed gap-4 z-50 bg-custom-rgba backdrop-blur-10px shadow-custom-shadow top-0 right-0 flex flex-col md:hidden py-4 p-10">
        <IoMdClose onClick={toggleMenu} />
        <ul className="flex flex-col gap-4 text-base font-semibold pb-4">
          <li >
            <a href="/" className="transition hover:text-caramel">
              Home
            </a>
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
    );
  }
  
  export { Hamburguer };