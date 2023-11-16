
const Home = () => {
    return (
        <div className='p-10 lg:py-5 lg:px-20 font-rajdhani'>
            <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-20">
                <div className="md:text-center lg:text-start lg:col-span-5">
                    <div><h1 className="font-bold text-xl lg:text-5xl">Hello!</h1></div>
                    <div className="mb-4 font-bold text-xl lg:text-5xl"><h1 className="">I'm your attendance buddy</h1></div>
                    <div><p className="lg:mt-10 text-md lg:text-lg">Please click the links at the top right to sign in and also view your name in the attendance list.</p></div> 
                </div>
                <div className="lg:col-span-5 mt-5">
                    <img className='' src="/11.svg" alt="" style={{}}/>
                </div>
            </div>
        </div>
    )
}

export default Home