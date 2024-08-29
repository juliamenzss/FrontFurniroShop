import { Menu } from "../components/menu/Menu"
import { Footer } from "../components/footer/Footer"
import { ProductDetails } from "../components/productDetails/ProductDetails"
import { Recommendation } from "../components/productDetails/Recommendation"

function Product() {
    

    return (
        <div>
            <Menu />
            <ProductDetails />
            <Recommendation />
            <Footer />
        </div>
    )
}

export { Product };