import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user.type";

interface AppContextType {
    user: User | null;
    handleSetUser: (user: User) => void;
    handleLogout: () => void;
}

export const AppContext = React.createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
    children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [user, setUser] = React.useState<User | null>(null);
    const [isLoading, setLoading] = React.useState(true);

    const navigate = useNavigate();

    const persistStorage = (key: string, value: unknown) => {
        sessionStorage.setItem(key, JSON.stringify(value));
    };

    const getPersistedStorage = (key: string): unknown => {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    };

    const removePersistentStorage = (key: string) => {
        sessionStorage.removeItem(key);
    };

    const handleSetUser = (user: User) => {
        setUser(user);
        persistStorage("user", user);
    };

    const handleLogout = () => {
        setUser(null);
        removePersistentStorage("user");
        navigate("/signin");
    }

    const contextValue: AppContextType = {
        user,
        handleSetUser,
        handleLogout,
    };

    const init = () => {
        const storedUser = getPersistedStorage("user") as User | null;

        // if (!storedUser) {
        //     setLoading(false);
        //     navigate("/signin");
        //     return;
        // }

        setUser(storedUser);
        setLoading(false);
    };

    React.useEffect(() => {
        init();
    }, []);

    return (
        <AppContext.Provider value={contextValue}>
            {isLoading ? <p>Loading...</p> : children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }

    return context;
};

export default AppContextProvider;
