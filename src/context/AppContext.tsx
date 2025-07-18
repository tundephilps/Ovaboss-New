import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user.type";
import axiosClient from "../utils/axiosClient";
import Loading from "../components/Loading";

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

    const removeAllPersistentData = () => {
        sessionStorage.clear();
        localStorage.clear();
    }

    const handleSetUser = (user: User) => {
        setUser(user);
        persistStorage("user", user);
    };

    const handleLogout = () => {
        setUser(null);
        removeAllPersistentData();
        navigate("/");
    }

    const contextValue: AppContextType = {
        user,
        handleSetUser,
        handleLogout,
    };

    const init = async () => {
        try {
            const authToken = localStorage.getItem('authToken');
            const shouldRun =
                authToken &&
                location.pathname !== "/" &&
                location.pathname !== "/signin" &&
                !location.pathname.toLowerCase().includes("auth");

            if(shouldRun) {
                const { status, data: response } = await axiosClient.get('user/profile-details');
                if(status === 200) {
                    const { userData, ...rest } = response.data;

                    handleSetUser({
                        ...userData,
                        ...rest,
                    })
                }
            }
        } catch(error) {

        }

        // const storedUser = getPersistedStorage("user") as User | null;

        // if (!storedUser) {
        //     setLoading(false);
        //     navigate("/signin");
        //     return;
        // }

        // setUser(storedUser);
        setLoading(false);
    };

    React.useEffect(() => {
        init();
    }, []);

    return (
        <AppContext.Provider value={contextValue}>
            {isLoading ? <Loading/> : children}
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
