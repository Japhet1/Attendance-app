import { useRegisterContext } from '../hook/useRegisterContext';
import { useState } from 'react';
//import { useForm } from 'react-hook-form';


const SignInForm = () => {


    const { dispatch } = useRegisterContext()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [contact, setContact] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("result",firstname,lastname,contact)
        
        const register = { firstname, lastname, contact, status: 'sign in' }
        const response = await fetch ('https://japh-server.onrender.com/api/register/', {
            method:'POST',
            body:JSON.stringify(register),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json() 

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setFirstname('')
            setLastname('')
            setContact('')
            setError(null)
            setEmptyFields([])
            console.log("new user added:", json)
            dispatch({ type:'CREATE_SIGNUP', payload:json})
        }
    }
    return (
        
            <form onSubmit={handleSubmit} className='lg:w-80 border shadow-lg bg-purple-300 p-10 rounded-lg space-y-4'>
                <div>
                    <label className='font-semibold space-y-2 '>
                        <h1>First name:</h1>
                        <input className={`lg:w-56 p-3 h-8 rounded-lg mb-3 ${emptyFields.includes('firstname') ? 'border border-red-500' : ''}`}
                        type="text" 
                        onChange={(e) => setFirstname(e.target.value)} 
                        value={firstname} />
                    </label>
                </div>

                <div>
                    <label className='font-semibold space-y-2'>
                        <h1>Last name:</h1>
                        <input className={`lg:w-56 p-3 h-8 rounded-lg mb-3 ${emptyFields.includes('lastname') ? 'border border-red-500' : ''}`} 
                        type="text" 
                        onChange={(e) => setLastname(e.target.value)} 
                        value={lastname} />
                    </label>
                </div> 

                <div>  
                    <label className='font-semibold space-y-2 '>
                        <h1>Contact:</h1>
                        <input className={`lg:w-56 p-3 h-8 rounded-lg mb-3 ${emptyFields.includes('contact') ? 'border border-red-500' : ''}`}
                        type="number" 
                        onChange={(e) => setContact(e.target.value)} 
                        value={contact} />
                    </label>
                </div>   
       
                <div className=''>
                    <button className="bg-white py-2 px-4 lg:text-lg rounded-lg font-semibold">Sign in</button>
                    {error && <div className='text-white bg-red-400 p-3 rounded-lg mt-2'>{error}</div>}
                </div>
            </form>
 
        
    )
}

export default SignInForm