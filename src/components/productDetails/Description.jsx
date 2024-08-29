import React, { useState, useEffect } from "react";
import Evaluation from "../../assets/menu/evaluation.png";
import IconFace from "../../assets/productImg/iconFace.png";
import IconX from "../../assets/productImg/iconX.png";
import IconLinkedin from "../../assets/productImg/iconLinkedin.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../store/cart/cartSlice";

function Description({
  name,
  img,
  longDescription,
  price,
  product,
}) {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(null);
  const [isSizeClicked, setIsSizeClicked] = useState(null);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const totalQuantity = product.reduce((sum, p) => sum + p.quantity, 0);
  

  const handleColorSelect = (colorSelect) => { setIsClicked(colorSelect);};

  const handleSizeSelect = (sizeSelect) => { setIsSizeClicked(sizeSelect) }

  
  const handleIncrement = () => {
    if (quantity < totalQuantity) {
      setQuantity(quantity + 1);
    }
  };
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  
  useEffect(() => {
    const productColor = product.map(c => c.color.name);
    const uniqueColors = [...new Set(productColor)];
    const lowerCaseColors = uniqueColors.map(color => color.toLowerCase());
    const productSize = product.map(s => s.size.name);
    const uniqueSize = [...new Set(productSize)];
    if (quantity > totalQuantity) {setQuantity(totalQuantity)};
    
    setColor(lowerCaseColors);
    setSize(uniqueSize);
  }, [product, totalQuantity, quantity])


  const handleAddToCart = (event) => {
    event.stopPropagation();
    dispatch(addProduct({
    productId: product.productId,
    productSkuId: product.id,
    name: name,
    image: img,
    price: price,
    quantity: quantity
  }))
  }




  return (
    <section className="py-10 md:py-16 flex w-1/2">
      <div className="pl-12 md:pl-16 flex flex-col  items-center justify-start">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl pb-2 font-medium">{name}</h1>
          <h3 className="text-gray-light text-lg">Rs. {price} </h3>
          <span className="flex flex-row items-center gap-4 justify-center">
            <img src={Evaluation} alt="Customer reviews" className="h-4" />
            <div className="hidden lg:block border-l sm:border-l-1 h-6 mx-auto my-4 border-gray-light"></div>
            <p className="text-gray-light text-xs">5 Customer Review</p>
          </span>
          <span className="w-96">
            <p className="text-xs">{longDescription}</p>
          </span>
          <div className="flex flex-col items-start justify-start">
            <p className="text-base text-gray-light py-2">Size</p>

            <div className="flex flex-row gap-4">
              {size.map((s) => (
                <div
                  key={s}
                  className={`h-10 w-8 font-semibold transition border-none rounded-lg flex text-center justify-center ${
                    isSizeClicked == s ? "bg-caramel text-white" : "bg-light-salmon text-black"}`}>
                  <button
                    onClick={() => handleSizeSelect(s)}
                    className="">
                    {s}
                  </button>
                </div>
              ))}
            </div>

            <p className="text-base text-gray-light py-2">Color</p>

            <div className="flex flex-row justify-center items-center  ">
              {color.map((c) => (
                <div
                  key={c}
                  className={` text-gray ${
                    isClicked == c ? "border-2" : "border-none"
                  } mx-2 p-1 h-[52px] rounded-full`}
                >
                  <button
                    onClick={() => handleColorSelect(c)}
                    className={`focus:outline-none h-10 w-10 rounded-full bg-${c}`}
                  ></button>
                </div>
              ))}
            </div>

            <div className=" justify-center flex flex-row gap-6 py-8">
              <div className="relative border border-gray-light rounded-xl h-12 w-24 flex items-center justify-center flex-row">
                <button
                  type="button"
                  id="decrement-button"
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  className={`inline-flex items-center justify-center${quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""}`}>-</button>
                <input
                  type="text"
                  id="counter-input"
                  data-input-counter
                  className=" border-0 bg-transparent text-sm font-normal max-w-[2rem] text-center"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <button
                  type="button"
                  id="increment-button"
                  onClick={handleIncrement}
                  disabled={quantity >= totalQuantity}
                  className={`inline-flex items-center justify-center${quantity >= totalQuantity ? "opacity-50 cursor-not-allowed" : ""}`}
                >+</button>
              </div>


              <div className="border rounded-xl h-12 w-40 flex items-center justify-center
               bg-white transition  hover:bg-caramel
                hover:text-white  font-semibold">
                <button onClick={handleAddToCart} className="">Add to Cart</button>
              </div>


            </div>

            <div className="hidden lg:block sm:border-t border-opacity-40 h-10 w-96 mx-auto my-4 border-gray-light justify-center items-center sm:flex"></div>
            <table className="table-auto w-full text-left max-w-md mx-auto flex items-start justify-start  text-gray-light ">
              <tbody className="">
                <tr>
                  <td className="pr-4 py-2">SKU</td>
                  <td>: SS001</td>
                </tr>
                <tr>
                  <td className="pr-4 py-2">Category</td>
                  <td>: Sofas</td>
                </tr>
                <tr>
                  <td className="pr-4 py-2">Tags</td>
                  <td>: Sofa, Chair, Home, Shop</td>
                </tr>
                <tr>
                  <td className="pr-4 py-2">Share</td>
                  <td className="flex items-center space-x-4">
                    <img src={IconFace} alt="" />
                    <img src={IconLinkedin} alt="" />
                    <img src={IconX} alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Description };
