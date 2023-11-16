import { Link } from 'react-router-dom'

const AttendanceNavbar = () => {
    return (
        <header className="p-5 lg:py-5 lg:px-20 bg-purple-300 font-rajdhani">
            <nav className="space-y-4 lg:space-y-0 lg:flex lg:flex-wrap lg:justify-between lg:items-center text-md text-center">
                <div className=''>
                    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl"><Link to='/' className="">Attendance-App</Link></h2>
                </div>
                <div className='text-md font-bold text-md md:text-lg lg:text-lg lg:space-x-5'>
                    <span className='border-e border-black px-3'><Link to='/signin' className="">Register</Link></span>
                    <span className='border-e border-black px-3'><Link to='/list' className="">List</Link></span>
                    <span className='border-e border-black px-3'><Link to='/notifications' className="">Notice</Link></span>
                </div>
            </nav>
        </header>
    )
}

export default AttendanceNavbar