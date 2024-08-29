import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setBilling } from "../../store/billing/billingSlice";

function BillingForm() {
  const { register, setValue, setFocus, getValues } = useForm();
  const dispatch = useDispatch();

  const handleBlur = (field) => {
    const value = getValues(field);
    dispatch(setBilling({ field, value }));
    console.log({ [field]: value });
  };

  const handleChange = (field) => {
    const value = getValues(field);
    dispatch(setBilling({ [field]: value }));
    console.log({ [field]: value });
  };

  const checkZipCode = async (e) => {
    const zipCode = e.target.value.replace(/\D/g, '');

    if (zipCode.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
        const data = response.data;

        setValue('address', data.logradouro);
        setValue('region', data.bairro);
        setValue('town', data.localidade);
        setValue('province', data.uf);
        
        dispatch(setBilling({
          address: data.logradouro,
          region: data.bairro,
          town: data.localidade,
          province: data.uf,
        }));

        setFocus('region'); 

      } catch (error) {
        toast.error("Something went wrong!");
      }
    } else {
      toast.error("Zip-Code is invalid");
    }
  };

  return (
    <section className="sm:w-1/2 h-full flex">
      <div className="mx-auto w-1/2 flex items-center justify-center">
        <div className="justify-center items-center">
          <div>
            <h2 className="font-semibold py-2 text-2xl sm:pb-6 pt-10 sm:pt-16">
              Billing Details
            </h2>
          </div>
          <form>
            <div className="sm:flex flex-row justify-between">
              <div className="py-1 sm:py-4">
                <label htmlFor="name" className="text-sm md:text-base font-medium">First Name</label> <br />
                <input
                  type="text" id="name" {...register("name")}
                  onBlur={() => handleBlur("name")}
                  className="w-60 h-8 sm:w-44 sm:h-16 rounded-lg border focus:outline-none border-slate-300 mt-1 text-black pl-2 text-lg"
                  required
                />
              </div>
              <div className="py-1 sm:py-4">
                <label htmlFor="lastName" className="text-sm md:text-base font-medium">Last Name</label> <br />
                <input
                  type="text" id="lastName" {...register("lastName")}
                  onBlur={() => handleBlur("lastName")}
                  className="w-60 h-8 sm:w-44 sm:h-16 rounded-lg border focus:outline-none border-slate-300 mt-1 text-black pl-2 text-lg"
                  required
                />
              </div>
            </div>

            <div className="py-1 sm:py-4">
              <label htmlFor="company" className="text-sm md:text-base font-medium">
                Company Name (Optional)
              </label> <br />
              <input
                type="text" id="company" {...register("company")}
                onBlur={() => handleBlur("company")}
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black pl-2 mt-1 text-lg"
              />
            </div>
            <div className="py-1 sm:py-4">
              <label htmlFor="zipCode" className="text-sm md:text-base font-medium">ZIP code</label> <br />
              <input
                type="text" id="zipCode" {...register("zipCode")}
                onBlur={(e) => {
                  checkZipCode(e);
                  handleBlur("zipCode");
                }}
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg"
                required
              />
            </div>
            <div className="py-1 sm:py-4">
              <label htmlFor="region" className="text-sm md:text-base font-medium">Region</label> <br />
              <input
                type="text" id="region" {...register("region")}
                onChange={() => handleChange("region")}
                onBlur={() => handleBlur("region")}
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg"
                required
              />
            </div>
            <div className="py-1 sm:py-4">
              <label htmlFor="address" className="text-sm md:text-base font-medium">Street address</label> <br />
              <input
                type="text" id="address" {...register("address")}
                onChange={() => handleChange("address")}
                onBlur={() => handleBlur("address")}
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg"
                required
              />
            </div>
            <div className="py-1 sm:py-4">
              <label htmlFor="town" className="text-sm md:text-base font-medium">Town / City</label> <br />
              <input
                type="text" id="town" {...register("town")}
                onChange={() => handleChange("town")}
                onBlur={() => handleBlur("town")}
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg"
                required
              />
            </div>
            <div className="py-1 sm:py-4">
              <label htmlFor="province" className="text-sm md:text-base font-medium">Province</label> <br />
              <input
                type="text" id="province" {...register("province")}
                onChange={() => handleChange("province")}
                onBlur={() => handleBlur("province")}
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg"
                required
              />
            </div>
            <div className="py-1 sm:py-4">
              <label htmlFor="addOnAddress" className="text-sm md:text-base font-medium">Add-on address</label> <br />
              <input
                type="text" id="addOnAddress" {...register("addOnAddress")}
                onBlur={() => handleBlur("addOnAddress")}
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg"
              />
            </div>
            <div className="py-1 sm:py-4">
              <label htmlFor="email" className="text-sm md:text-base font-medium">Email address</label> <br />
              <input
                type="email" id="email" {...register("email")}
                onBlur={() => handleBlur("email")}
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg"
                required
              />
            </div>
            <div className="py-1 sm:py-4">
              <label htmlFor="addInformation" className="text-sm md:text-base font-medium">Additional information</label> <br />
              <input
                type="text" id="addInformation" {...register("addInformation")}
                onBlur={() => handleBlur("addInformation")}
                className="w-60 h-8 sm:w-96 sm:h-16 rounded-lg border focus:outline-none border-slate-300 text-black mt-1 pl-2 text-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export { BillingForm };
