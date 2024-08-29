import { useDispatch } from "react-redux";
import { setSortByName, setSortByPrice } from "../../store/URL/urlSlice";

function Filter() {
  const dispatch = useDispatch();

  const handleUrl = (e) => {
    switch (e.target.id) {
      case "lowToHigh":
        dispatch(setSortByPrice('asc'));

        break;
      case "highToLow":
        dispatch(setSortByPrice('desc'));

        break;
      case "aToZ":
        dispatch(setSortByName('asc'));

        break;
      case "zToA":
        dispatch(setSortByName('desc'));
        break;
    }
  };

  return (
    <section className="flex-col items-start mt-28 px-2 sm:p-0 h-40 w-36 sm:flex-row absolute bg-purple-50 sm:h-32 sm:w-64 flex sm:items-center justify-around sm:mt-44 ml-10 z-10 rounded-2xl border border-gray-light border-opacity-30">
      <div className="flex flex-col gap-4">
        <span className="flex flex-row gap-2">
          <input
            id="lowToHigh"
            type="radio"
            name="order"
            onChange={handleUrl}
          />
          <label htmlFor="lowToHigh">Low to High</label>
        </span>
        <span className="flex flex-row gap-2">
          <input
            id="highToLow"
            type="radio"
            name="order"
            onChange={handleUrl}
          />
          <label htmlFor="highToLow">High to Low</label>
        </span>
      </div>
      <div className="hidden lg:block border-l sm:border-l-2 h-16 border-opacity-20 border-gray-light "></div>

      <div className="flex flex-col gap-4 pr-2">
        <span className="flex flex-row gap-2">
          <input id="aToZ" type="radio" name="order" onChange={handleUrl} />
          <label htmlFor="aToZ">A to Z</label>
        </span>
        <span className="flex flex-row gap-2">
          <input id="zToA" type="radio" name="order" onChange={handleUrl} />
          <label htmlFor="zToA">Z to A</label>
        </span>
      </div>
    </section>
  );
}

export { Filter };
