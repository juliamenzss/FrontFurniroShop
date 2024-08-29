import AuthImage from "../../assets/authImage/authImage.png";
import GoogleIcon from "../../assets/authImage/GoogleIcon.png";
import AppleIcon from "../../assets/authImage/AppleIcon.png";
import { api } from "../../axios/axiosConfig";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


function RegisterLayout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavLogin = () =>{
    navigate('/login')
  };
  const handleToHome = () =>{
    navigate('/')
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      password,
    };

    setLoading(true);

    api
      .post("/auth/register", user)
      .then((response) => {
        const token = response?.data?.accessToken;
        sessionStorage.setItem("jwt_token", token);

        if (token) {
          localStorage.setItem("jwt_token", token);
          toast.success("Login successfully");
          navigate(location.state?.from || "/");
          setEmail("");
          setPassword("");
        } else {
          toast.error("Token is undefined");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        setEmail("");
        setPassword("");
      })
      .finally(() => {
        setLoading(false);
      });
  };
    useEffect(() => {
    const token = localStorage.getItem("jwt_token");

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);


  return (
    <section className="flex h-screen">
      <section className="w-full md:w-7/12 h-screen z-10 flex-col flex items-center justify-center">
        <form
          onSubmit={submitForm}
          className="flex items-start justify-start flex-col"
        >
          <div className="max-w-xs whitespace-normal">
          <div className="pb-2" onClick={handleToHome} > <FaArrowLeft className="text-xl cursor-pointer"/> </div>
            <h1 className="text-xl sm:text-3xl font-semibold pb-2">
              Get Started Now
            </h1>
            <p className="text-sm pb-4 sm:text-base font-semibold sm:pb-6 ">
              Enter your Credentials to access your account
            </p>
          </div>
          <label htmlFor="name" className="text-xs sm:text-sm font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[295px] sm:w-[420px] h-7 rounded-lg border pl-2 focus:outline-none border-slate-300 text-black text-xs"
            placeholder="Enter your name"
            required
          />{" "}
          <br />
          <label htmlFor="email" className="text-xs sm:text-sm font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="h-7 w-[295px] sm:w-[420px] rounded-lg border pl-2 focus:outline-none border-slate-300 text-black text-xs"
            required
          />{" "}
          <br />
          <label
            htmlFor="password"
            className="text-xs sm:text-sm font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="h-7 w-[295px] sm:w-[420px] rounded-lg border pl-2 focus:outline-none border-slate-300 text-black text-xs"
            required
          />{" "}
          <div className="flex items-center py-5">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="w-2 sm:w-3 mr-1 cursor-pointer"
              required
            />
            <label htmlFor="terms" className="text-xs font-medium">
              I agree to the{" "}
              <a href="" className="underline">
                terms & policy
              </a>
            </label>
          </div>
          <div className="pl-4 sm:flex items-center py-5 sm:pb-8 justify-center sm:pt-6 text-white">
            <button
              type="submit"
              className="bg-green h-auto w-[280px] sm:w-[420px] text-sm font-bold p-1 rounded-lg border transition hover:bg-slate-200 hover:border-transparent hover:text-black "
            >
              Signup
            </button>
          </div>
        </form>

        <div className="pb-6  sm:pb-8 flex jutify-center flex-row items-center text-xs font-semibold ">
          <div className="w-36 sm:w-48 mx-auto border-t opacity-10"></div>
          <p className="px-1 sm:px-1 text-[10px]">Or</p>
          <div className="w-36 sm:w-48 mx-auto border-t opacity-10"></div>
        </div>

        <div className="flex justify-center items-center flex-row">
          <button
            type="button"
            className="w-32 mx-2 text-start text-xs sm:w-52 h-auto sm:text-sm font-medium p-2 rounded-lg border border-slate-300 flex items-center justify-center transition hover:bg-slate-200 hover:border-transparent"
          >
            <img
              src={GoogleIcon}
              alt="Google Icon"
              className="h-5 pr-1 sm:h-5 w-auto mr-2"
            />
            <span>Sign in with Google</span>
          </button>
          <button
            type="button"
            className="w-32 mx-2 text-start text-xs sm:w-52 h-auto sm:text-sm font-medium p-2 rounded-lg border border-slate-300 flex items-center justify-center transition hover:bg-slate-200 hover:border-transparent"
          >
            <img
              src={AppleIcon}
              alt="Apple Icon"
              className="h-5 pr-1 sm:h-5 w-auto mr-2"
            />
            <span>Sign in with Apple</span>
          </button>
        </div>
        <div className="pt-5 text-sm font-semibold flex-row flex p-2 space-x-2">
          <p>
            Have an account?{" "}
            </p>
            <p onClick={handleNavLogin} className="text-blue cursor-pointer">
              Sign In
          </p>
        </div>
      </section>
      <div className="hidden md:block md:w-1/2">
        <img
          src={AuthImage}
          alt="Image of foliage"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}

export { RegisterLayout };
