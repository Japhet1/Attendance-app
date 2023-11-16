//import { useEffect } from 'react';
import { useRegisterContext } from '../hook/useRegisterContext';

const SignOutDetail = ({ register }) => {
    const { dispatch } = useRegisterContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const response = await fetch ('/api/register/' + register._id, {
            method:'PUT',
            body:JSON.stringify({
                status: 'sign out'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json() 
        if (response.ok) {
            console.log("user time out:", json)
            dispatch({ type:'UPDATE_SIGNUP', payload:json})
        }
    }


    return (
        <div>
            <button className="text-base font-semibold bg-purple-400 p-2 text-white rounded-lg" onClick={handleSubmit}>SignOut</button>
        </div>
    )
}

export default SignOutDetail