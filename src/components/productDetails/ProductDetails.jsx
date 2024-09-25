import { Image } from "./Image"
import { Description } from "./Description"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { setProductId } from "../../store/Product/productIdSlice";
import { NavigationToolbar } from "../../components/toolbar/Navigation"


function ProductDetails() {
  const dispatch = useDispatch();


  const selectProduct = [];

  const id = useSelector((state) => state.id.id);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const productResponse = await fetch(`http://localhost:3000/products/id/${id}`);
              if (!productResponse.ok) {
                  throw new Error('Network response was not ok');
              }
              
              const product = await productResponse.json();
              setProductData(product);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, [id]);

  if (!productData) {
      return <div>Loading...</div>; 
  }
  
  if(productData.productSkus && productData.productSkus.length > 0) {
    dispatchEvent(setProductId({ id: productData.id, skuId: productData.productSkus[0].id }));
  }
  const skuData = productData.product.productSkus.map(sku => ({
    color: sku.color,
    size: sku.size,
    price: sku.price,
    image: sku.imageSku,
    quantity: sku.quantity 
  }));
    return (
      <div>
      <NavigationToolbar 
      name={productData.product.name}
      
      />

      
    <div className="flex-col sm:flex-row flex w-screen justify-center items-start">
      <Image 
        img={productData.product.image}
        skus={skuData}
        
      />
      <Description 
        name={productData.product.name}
        description={productData.product.description}
        longDescription={productData.product.longDescription}
        price={skuData[0].price}
        quantity={skuData.quantity}
        product={skuData}
        img={productData.product.image}

      />

</div>
    </div>
  );
}

export { ProductDetails };
