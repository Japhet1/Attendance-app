import { RegisterContext } from "../context/registerContext"
import { useContext } from "react"

export const useRegisterContext = () => {
    const context = useContext(RegisterContext)

    if(!context) {
        throw Error ('useRegistrationContext must be available in RegisterContextProvider')
    }

    return context

}