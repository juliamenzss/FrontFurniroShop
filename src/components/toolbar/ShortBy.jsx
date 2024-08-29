
function ShortBy(){
    return(
        <div className="absolute h-10 w-10 bg-white ">
            <input id="asc" type="radio" name="order"/>
            <label htmlFor="asc">De A a Z</label>
            
            <input id="desc" type="radio" name="order"/>
            <label htmlFor="desc">De Z a A</label>
        </div>
    )
}

export { ShortBy }