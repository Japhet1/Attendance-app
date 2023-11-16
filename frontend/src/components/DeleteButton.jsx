import { useRegisterContext } from '../hook/useRegisterContext';
import {BsTrashFill } from 'react-icons/bs'

const DeleteButton = ({ register }) => {
    const { dispatch } = useRegisterContext()

    const handleClick = async () => {
        const response = await fetch ('/api/register/' + register._id, {
            method: 'DELETE',
        })
        const json = await response.json()

        if (response.ok) {
            dispatch ({ type: 'DELETE_SIGNUP', payload: json})
        }
    }

    return (
        <span className="" onClick={handleClick}><BsTrashFill/></span>
    )
}

export default DeleteButton