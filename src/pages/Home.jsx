import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BannerHeader } from "../components/banner/BannerHeader";
import { ServiceBar } from "../components/services/ServiceBar";
import { Menu } from "../components/menu/Menu";
import { Footer } from "../components/footer/Footer";
import { ProductCard } from "../components/card/ProductCard";
import { Toolbar } from "../components/toolbar/Toolbar";
import { productFailed, productLoading, productReceived } from "../store/Product/productSlice";
import { selectProducts, selectProductsStatus } from "../store/Product/Selectors";
import { Button } from "../components/pagination/Button";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const baseURL = useSelector((state) => state.URL.baseURL)
  const bannerName = "Shop";

  useEffect(() => {
    const fetchData = async () => {
      dispatch(productLoading());
      try {
        const response = await fetch(baseURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch(productReceived(data));
      } catch (error) {
        dispatch(productFailed(error.toString()));
      }
    };

    fetchData();
  }, [dispatch, baseURL]);
  return (
    <div>
      <Menu />
      <BannerHeader name={bannerName} />
      <Toolbar/>
      <div className="w-full flex flex-wrap items-center justify-center py-10">
        {status === 'loading' && <p>Carregando produtos...</p>}
        {status === 'failed' && <p>Erro ao carregar produtos. Tente novamente.</p>}
        {status === 'succeeded' && products && products.products.length > 0 ? (
          products.products.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              skus={product.productSkus.map(productSku => ({
                key: productSku.id,
                id: productSku.id,
                productId: product.id,
                price: productSku.price,
                discountPrice: productSku.discountPrice,
                discountPercentage: productSku.discountPercentage,
                newProduct: productSku.newProduct,
              }))}
            />
          ))
        ) : (
          <p>Nenhum produto disponível.</p>
        )}
      </div>
      <div className="w-screen flex justify-center items-center">
      <Button />
      </div>

      <ServiceBar />
      <Footer />
    </div>
  );
}

export { Home };