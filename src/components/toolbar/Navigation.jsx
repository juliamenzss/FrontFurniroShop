import { useNavigate } from 'react-router-dom';
import Arrow from '../../assets/banner/arrow.png'

function NavigationToolbar({name}) {

  const navigate = useNavigate();

  const handledNavigation = () => {
    navigate("/")
  }
  return (
    <div className=' flex flex-row items-center justify-between '>
    <section className="h-16 sm:h-20 flex items-center px-2 bg-light-yellow w-full justify-around ">
      
        <ul className="flex flex-row justify-center items-center space-x-4 font-normal">
            <li onClick={handledNavigation} className='cursor-pointer transition hover:text-caramel  text-gray-light'>Home</li>
            <img src={Arrow} alt="Arrow" className='h-3 w-auto' />
            <li onClick={handledNavigation} className='cursor-pointer transition hover:text-caramel  text-gray-light'>Shop</li>
            <img src={Arrow} alt="Arrow" className='h-3 flex-row' />
        <div className="sm:h-9 mx-auto border-l-2 my-4 px-2 border-gray-light "></div>
        <p className=' font-medium text-lg'>{name}</p>
        </ul>
        
    </section>
    </div>

  );
}
export { NavigationToolbar }