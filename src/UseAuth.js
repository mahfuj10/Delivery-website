import { useContext } from "react"
import { AuthProvider } from "./Context/AuthContext"

const UseAuth = () => {
    return useContext(AuthProvider)
} 
export default UseAuth;