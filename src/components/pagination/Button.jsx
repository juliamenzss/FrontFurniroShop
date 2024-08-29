import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../store/Product/Selectors";
import { setPage } from "../../store/URL/urlSlice";

function Button() {
  const [page, setPagination] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const buttons = [];

  const handlePage = (page) => {
    setPagination(page);
  };

  const handleNext = () => {
    setPagination((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPagination((prev) => prev - 1);
  };

  for (let i = 1; i <= products.totalPages; i++) {
    buttons.push(
      <button key={i} onClick={() => handlePage(i)} className={`transition mb-2 py-3 px-5 font-semibold rounded-md ${ page === i ? 'bg-caramel text-white' : 'bg-light-salmon text-black '}`}>
        {i}
      </button>
    );
  }

  useEffect(() => {
    // const newUrl = `http://localhost:3000/sorted?page=${page}&pageSize=16`;
    dispatch(setPage(page));
  }, [page]);

  return (
    <div className="flex gap-4 pb-10">
      {page != 1 && <button onClick={handlePrev}  className="bg-light-salmon mb-2 py-3 px-5 font-semibold rounded-md text-black active:bg-caramel transition duration-300">Prev</button>}
      {buttons}
      {products.totalPages != page && (
        <button onClick={handleNext}  className="bg-light-salmon mb-2 py-3 px-5 font-semibold rounded-md text-black active:bg-caramel transition duration-300">Next</button>
      )}
    </div>
  );
}

export { Button };
