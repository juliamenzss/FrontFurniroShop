import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { setBilling } from "../../store/billing/billingSlice";
import Ellipse from "../../assets/billing/ellipse.png";
import { useNavigate } from "react-router-dom";
import { api } from "../../axios/axiosConfig";


function BillingDetails() {
  const { register, handleSubmit } = useForm();
  const cartItems = useSelector((state) => state.cart?.cart || []);
  const checkoutDetails = useSelector((state) => state.billing.dataUser);
  console.log(cartItems)
  const [orderData, setOrderData] = useState({
    name: '',
    lastName: '',
    email: '',
    zipCode: '',
    address: '',
    region: '',
    town: '',
    province: '',
    addOnAddress: '',
    addInformation: '',
    total: 0,
    products: [],
    payment: ''
  });

  useEffect(() => {
    if (checkoutDetails && cartItems) {
      const productsIds = cartItems.map(item => ({
        productId: item.productSkuId,
        quantity: item.quantity,
      }));

      const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      setOrderData({
        name: checkoutDetails.name,
        lastName: checkoutDetails.lastName,
        email: checkoutDetails.email,
        zipCode: checkoutDetails.zipCode,
        address: checkoutDetails.address,
        region: checkoutDetails.region,
        town: checkoutDetails.town,
        province: checkoutDetails.province,
        addOnAddress: checkoutDetails.addOnAddress || '',
        addInformation: checkoutDetails.addInformation || '',
        total: totalAmount,
        products: productsIds,
        payment: checkoutDetails.payment
      });
    }
  }, [checkoutDetails, cartItems]);


  const handleOrder = async () => {
    try {
      const response = await api.post('/order', orderData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Order placed successfully:', response.data);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const paymentMethod = (e) => {
    setOrderData((prevOrderData) => ({
      ...prevOrderData,
      payment: e.target.value,
    }));
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="w-full max-w-md flex items-center justify-center pt-20">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <table className="w-full sm:min-w-full text-left text-sm">
            <thead>
              <tr>
                <th className="px-10 text-lg sm:px-6 py-3 sm:text-2xl font-medium">
                  Product
                </th>
                <th className="px-10 text-lg sm:px-6 py-3 sm:text-2xl font-medium text-right">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <>
                  <tr key={item.id}>
                    <td className="pl-10 sm:px-6 py-3 sm:py-4 text-gray-light text-sm sm:text-base font-normal">
                      {item.name}{" "}
                      <span className="text-black">x {item.quantity}</span>
                    </td>
                    <td className="pr-10 sm:pr-6 sm:pl-6 py-3 sm:py-4 text-sm sm:text-base font-light text-right">
                      Rs. {item.price}
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-10 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium">
                      Subtotal
                    </td>
                    <td className="pr-10 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-light text-right">
                      Rs. {item.price * item.quantity}
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-10 sm:px-6 py-3 sm:py-4 text-base font-bold">
                      Total
                    </td>
                    <td className="pr-10 sm:px-6 py-3 sm:py-4 text-lg font-semibold text-right text-caramel">
                    Rs. {total}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>

          <section className="w-full sm:min-w-full text-left text-sm px-10 sm:px-6">
            <div className="px-5">
              <div className="w-56 sm:w-96 mx-auto border-t opacity-20"></div>
            </div>
            <div className="flex flex-row my-3 items-center">
              <img src={Ellipse} alt="ellipse" className="h-3 w-3" />
              <h4 className="font-normal pl-3">Direct Bank Transfer</h4>
            </div>

            <div>
              <p className="text-gray-light font-light">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>

            <div className="py-6">
              <span className="flex-row flex items-center py-2">
                <input
                  id="paymentTransfer"
                  type="radio"
                  name="payment"
                  value="cash"
                  onChange={paymentMethod}
                  className="w-3 h-3 checked: border border-gray-light cursor-pointer focus:outline-none"
                />
                <label
                  htmlFor="paymentTransfer"
                  className="pl-3 text-gray-light font-medium"
                >
                  Direct Bank Transfer
                </label>
              </span>
              <span className="flex-row flex items-center">
                <input
                  id="paymentCash"
                  type="radio"
                  name="payment"
                  value="cash"
                  onChange={paymentMethod}
                  className=" w-3 h-3 border border-gray-light cursor-pointer focus:outline-none"
                />
                <label
                  htmlFor="paymentCash"
                  className="pl-3 text-gray-light font-medium"
                >
                  Cash On Delivery
                </label>
              </span>

              <div className="py-6">
                <p className="font-light">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our
                  <a href="#" className="font-semibold">
                    {" "}
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleOrder}
                  className="py-3 px-16 mt-2 transition hover:bg-caramel hover:text-white border text-xl mb-8 sm:py-4 sm:px-20 rounded-xl"
                >
                  Place order
                </button>
              </div>
            </div>
          </section>
        </form>
      </div>
    </section>
  );
}

export { BillingDetails };