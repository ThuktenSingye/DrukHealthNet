import {createContext, useEffect, useReducer} from 'react'
import { projectAuth } from '../firebase/config' // importing authentication services
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const authReducer = (state, action) =>{
    switch(action.type){
        case 'LOGIN':
            return {...state, user: action.payload, log: true}
        case 'SIGN_UP':
            return {...state, user: action.payload, sign: true}
        case 'LOGOUT':
            return {...state, user:null}
        case 'AUTH_IS_READY':
            return {...state, user: action.payload, authIsReady: true}
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) =>{
    // let define auth state
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false,
        log: false,
        sign: false
    })
    // to check when component load, if user is login, 
    useEffect(()=>{
        const unsub = onAuthStateChanged(projectAuth, (user)=>{
            dispatch({type:'AUTH_IS_READY', payload: user})
            unsub()
        })
        // const unsub = projectAuth.onAuthStateChanges((user)=>{
        //     dispatch({type:'AUTH_IS_READY', payload: user})
        //     unsub()
        // })
    }, [])
    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}