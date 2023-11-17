import { useEffect } from "react"
import { useRegisterContext } from "../hook/useRegisterContext"
import { format } from 'date-fns'
import DeleteButton from "../components/DeleteButton";
import SignOutDetail from "../components/signOutButton";

//import axios from 'axios';



const Attendance = () => {

    const { registers, dispatch } = useRegisterContext()
    
    useEffect (() => { 
        const fetchRegister = async () => {
            const response = await fetch ('https://japh-server.onrender.com/api/register/')
            const json = await response.json()
           
            if (response.ok) {
                dispatch({ type:'SET_SIGNUP', payload:json})
            }
        }

        fetchRegister()
    },[dispatch]) 

    return (
        <main className="font-rajdhani">
            <div className="p-4 my-5 text-center font-bold text-xl md:text-3xl lg:text-5xl"><h1>Remember to sign out daily!</h1></div>
            <div className="w-screen flex justify-center items-center my-10" style={{}}>   
                <div className="border border-purple-300 p-5">
                    <section className="text-center" style={{}}>
                        <div className="flex flex-wrap justify-between mb-5 mx-3 gap-20 font-semibold">
                            <div className="col-span-6 text-start text-lg md:text-xl lg:text-2xl"><h1 className="">Attendance List</h1></div>
                            <div className="col-span-6 text-end text-lg md:text-xl lg:text-xl"><h1>{new Date().toLocaleString()}</h1></div>
                        </div>
                        <table className="">
                            <table>
                                <thead>
                                    <tr className="font-semibold text-start bg-purple-900 text-white">
                                        <th className="w-10 p-3 text-start text-lg border border-white">#</th>
                                        <th className="w-60 p-3 text-start text-lg border border-white">Name</th>
                                        <th className="w-60 p-3 text-start text-lg border border-white">Contact</th>
                                        <th className="w-60 p-3 text-start text-lg border border-white">Time in</th>
                                        <th className="w-60 p-3 text-start text-lg border border-white">Time out</th>
                                        <th className="w-32 p-3 text-start text-lg border border-white">Status</th>
                                        
                                    </tr>
                                </thead>
                                
                                
                                
                                <tbody>
                                    {registers && registers.map((register, index) => (
                                        
                                        <tr key={index} className="text-start bg-purple-100 font-semibold">
                                            <td className='w-10 p-3 text-start text-lg border border-purple-300'>{index +1}</td>
                                            <td className='w-60 p-3 text-start text-lg border border-purple-300'>{`${register.firstname} ${register.lastname}`}</td>
                                            <td className="w-60 p-3 text-start text-lg border border-purple-300">{`0${register.contact}`}</td>
                                            <td className="w-60 p-3 text-start text-lg border border-purple-300">{format(new Date(register.createdAt), "hh : mm : ss aaa")}</td>
                                            <td className="w-60 p-3 text-start text-lg border border-purple-300">{register.status === 'sign in'? 'xx : xx : xx' : format(new Date(register.updatedAt),"hh : mm : ss aaa")}</td>
                                            <td className="w-32 p-3 text-start text-lg border border-purple-300">{register.status}</td>
                                            <div className="w-36 p-3 text-start text-lg border-t border-purple-300">
                                                <td className="flex flex-wrap items-center gap-4"><span><SignOutDetail register={register}/></span><span><DeleteButton register={register}/></span></td>
                                            </div>
                                            
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </table>                   
                    </section>
                </div>
            </div> 

        </main>
        
    )
}

export default Attendance