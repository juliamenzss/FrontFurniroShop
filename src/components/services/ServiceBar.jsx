import Quality from "../../assets/serviceBar/quality.png";
import Protection from "../../assets/serviceBar/protection.png";
import Shipping from "../../assets/serviceBar/shipping.png";
import Support from "../../assets/serviceBar/support.png";

function ServiceBar() {
  const information = [
    {
      img: Quality,
      alt: "Quality trophy",
      title: "High Quality",
      desc: "crafted from top materials",
    },
    {
      img: Protection,
      alt: "Warranty protection",
      title: "Warranty Protection",
      desc: "Over 2 years",
    },
    {
      img: Shipping,
      alt: "Free shipping over 150 $",
      title: "Free Shipping",
      desc: "Order over 150 $",
    },
    {
      img: Support,
      alt: "Dedicated support",
      title: "24 / 7 Support",
      desc: "Dedicated support",
    },
  ];

  return (
    <section className="h-auto w-full bg-light-yellow flex items-center justify-center">
      <ul className=" w-9/12 sm:w-9/12 lg:w-full max-w-screen-lg flex flex-wrap justify-center items-center gap-8 p-5 md:p-8">
        {information.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-8 sm:w-10 h-auto object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-semibold">{item.title}</h1>
              <p className="text-sm sm:text-base font-medium text-gray">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { ServiceBar };
