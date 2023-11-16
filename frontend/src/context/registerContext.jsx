import { createContext, useReducer } from "react";

export const RegisterContext = createContext()

const registerReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SIGNUP':
            return {
                registers: action.payload
            }
        case 'CREATE_SIGNUP':
            return {
                registers: [state.registers, action.payload]
            }
        case 'UPDATE_SIGNUP':
            return {
                ...state,
                registers: state.registers.map((register) =>
                            register.id === action.payload.id ? action.payload : register
                        )

            }
            
        case 'DELETE_SIGNUP':
            return {
                registers: state.registers.filter((w) => w._id !== action.payload._id)
            }
        default :
            return state
    }
}


export const RegisterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(registerReducer, {
        registers: null,
    })

    return (
        <RegisterContext.Provider value={{...state, dispatch}}>
            { children }
        </RegisterContext.Provider>
    )
}