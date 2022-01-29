import { useContext } from "react"
import jwtDecode from "jwt-decode";

import authStorage from "./storage";
import AuthContext from "./context";

export default useAuth = () => {
    const {user, setUser } = useContext(AuthContext);

    const login = async (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        await authStorage.storeToken(authToken);
    }

    const logout = () => {
        setUser(null);
        authStorage.removeToken(); //no need to await, we are basically done here
    }

    return { user, login, logout };
}