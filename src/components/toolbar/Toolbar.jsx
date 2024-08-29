import FilterImage from '../../assets/filter.png'
import { useState } from 'react'
import {Filter} from './Filter'

function Toolbar() {

  const[filterClose, setFilterClose] = useState(false);

  const toggleFilter = () => {
    setFilterClose((prevFilterClose) => !prevFilterClose)
  }

  return (
    <section className="flex-col sm:flex-row sm:h-20 flex sm:items-center justify-between p-4 bg-light-yellow w-full">
        <div className='flex flex-row justify-around'>
      <div className="relative p-6 text-sm space-x-2 sm:pl-2 sm:space-x-2 flex flex-nowrap md:text-base md:flex justify-start items-center md:pl-16 md:space-x-3 font-normal">
        <button onClick={toggleFilter}><img src={FilterImage} alt="Filter" className="h-3 sm:h-5 w-auto" /></button>
        <p>Filter</p>
      </div>
      <div className="text-sm  items-center  sm:items-center flex ">
        <div className="hidden lg:block border-l sm:border-l-2 h-9 mx-auto my-4 pr-2 border-gray-light"></div>
        <p className="md:px-3 sm:p-6 text-xs lg:text-sm font-normal space-x-2 whitespace-nowrap">Showing 1–16 of 32 results</p>
      </div>
      </div>
      <section className="text-sm space-x-2 flex flex-row justify-around items-center md:font-normal">
      <div className="text-sm items-center flex pr-6">
        <p className="px-3 text-xs lg:text-sm sm:font-normal">Show</p>
        <input type="number" placeholder="16" className="flex text-center border-none outline-none h-12 w-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
      </div>
      <div className="text-sm items-center px-1 flex sm:p-6">
        <p className="px-3 text-xs lg:text-sm sm:font-normal">Short by</p>
        <input type="text" placeholder="Default" className="flex border-none pl-2 outline-none h-12 w-36 sm:w-20 lg:w-40"/>
      </div>
      
      </section>
      {filterClose && <Filter />}
    </section>
  );
}
export { Toolbar }


