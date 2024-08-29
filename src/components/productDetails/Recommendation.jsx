function Recommendation({ products }) {

    return(
        <section className="flex items-center justify-center py-12 flex-col">
            <h2 className=" text-4xl font-medium">Related Products</h2>
            <div className="mt-16 pb-20">
            <button className="border border-caramel text-caramel h-12 w-48 flex items-center justify-center bg-white transition hover:bg-caramel hover:text-white font-semibold ">Show More</button>
          </div>
          <div className="w-11/12 mx-auto border-t opacity-10 my-4"></div>

        </section>
    )
}

export { Recommendation }