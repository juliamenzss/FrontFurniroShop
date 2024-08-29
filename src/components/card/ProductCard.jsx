import Share from "../../assets/hoverImage/share.png";
import Compare from "../../assets/hoverImage/compare.png";
import Like from "../../assets/hoverImage/like.png";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from "../../store/cart/cartSlice";
import { setProductId } from "../../store/Product/productIdSlice";
import { useNavigate } from 'react-router-dom';



function ProductCard({ image, name, description, skus }) {
  
  const sku = skus[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleAddId = () => {
    dispatch(setProductId({id: sku.productId, skuId: sku.id}))
    console.log('aqui é click', sku.productId)
    navigate('/product')
  }


  const handleAddToCart = (event) => {
    event.stopPropagation();
    dispatch(addProduct({
    productId: sku.productId,
    productSkuId: sku.id,
    name: name,
    image: image,
    price: sku.price,
    discountPrice: sku.discountPrice,
    quantity: 1
  }))
  }


  

  return (
    <section  className="max-w-sm w-64 shadow-sm m-5 bg-silver-gray cursor-pointer">
      <div className="relative group" onClick={handleAddId} >
        <div>
          {sku.discountPercentage ? (
            <div className="absolute top-2 right-2 rounded-3xl h-9 w-9 bg-red-light flex justify-center items-center">
              <p className="text-xs text-white">
                {sku.discountPercentage.toFixed()}%
              </p>
            </div>
          ) : sku.newProduct ? (
            <div className="absolute top-2 right-2 rounded-3xl h-9 w-9 bg-tiffany flex justify-center items-center">
              <p className="text-xs text-white">New</p>
            </div>
          ) : null}
        </div>






        <img className="w-full" src={image} alt={name}/>
        <div className="invisible absolute top-0 left-0 w-full h-full bg-black 
        bg-opacity-50 flex flex-col justify-center items-center gap-4 transition-all
         duration-300 group-hover:visible">

          <button className="bg-white transition border-none hover:bg-caramel
           hover:text-white border mb-2 py-2 px-10 font-semibold text-caramel" 
          onClick={handleAddToCart}>Add to Cart
          </button>







          <div className="px-4 py-2 rounded-md flex text-sm justify-around items-center space-x-1">
            <button className="flex-row flex pr-1">
              <img src={Share} alt="share" className="pr-1" />
              <a href="" className="text-white transition hover:text-caramel">
                Share
              </a>
            </button>
            <button className="flex-row flex px-1">
              <img src={Compare} alt="compare" className="pr-1"/>
              <a href="" className="text-white transition hover:text-caramel">
                Compare
              </a>
            </button>
            <button className="flex-row flex px-1">
              <img src={Like} alt="like" className="pr-1"/>
              <a href="" className="text-white transition hover:text-caramel">
                Like
              </a>
            </button>
          </div>
        </div>










        <div className="px-6 pb-2 pt-6 ">
          <h3 className="font-bold text-xl mb-2">{name}</h3>
          <p className="text-gray text-base">{description}</p>
        </div>
        <div className="px-6 pb-4 flex-row flex gap-2">
          {sku.discountPrice ? (
            <>
              <p className="text-l font-semibold">
                Rp {sku.discountPrice.toFixed(3)}
              </p>
              <p className="line-through text-sm">Rp {sku.price.toFixed(3)}</p>
            </>
          ) : (
            <p className="text-l font-semibold">Rp {sku.price.toFixed(3)}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export { ProductCard };
