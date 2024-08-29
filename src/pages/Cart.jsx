import { BannerHeader } from "../components/banner/BannerHeader";
import { ServiceBar } from "../components/services/ServiceBar";
import { Menu } from "../components/menu/Menu";
import { Footer } from "../components/footer/Footer";
import { CartTotal } from "../components/cartPage/CartTotal";
// import { CheckoutButton } from "../components/cartPage/checkoutButton";


function Cart() {
    const bannerName = "Cart";
  return (
    <div >
      <Menu />
      <BannerHeader name={bannerName} />
      <div className="flex justify-center items-center">
      <CartTotal/>
      {/* <CheckoutButton /> */}
      </div>
      <ServiceBar />
      <Footer />
    </div>
  );
}

export { Cart };