import Syltherine from "../../assets/menu/syltherine.png";
function Image({img }) {
    return (
      <section className="flex flex-row ">
        <section className="px-8 pt-10 sm:p-16 flex space-x-4">
          {/* <div className="flex flex-col pl-16 gap-6 items-center justify-start">
            <img
              src=""
              alt=""
              className="hidden sm:flex h-16 w-20px-2"
            />
          </div> */}
          <div>
            <img
              src={img}
              alt=""
              className="md:h-96 w-96 px-26 rounded-xl"
            />
          </div>
        </section>

        
      </section>
    );
}

export { Image }