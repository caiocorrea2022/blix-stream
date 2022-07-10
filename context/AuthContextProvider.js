import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

export const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                const { uid } = user
                setUser({
                    id: uid,
                })
                setLoading(false);
            }
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
}