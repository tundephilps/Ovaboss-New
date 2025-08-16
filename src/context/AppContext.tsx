import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user.type";
import axiosClient from "../utils/axiosClient";
import Loading from "../components/Loading";
import { BusinessAccount } from "../types/business.type";
import { Product } from "../types/product.type";
import { Category, SubCategory } from "../types/category.type";
import { Cart } from "../types/cart.type";
import { persistStorage, removeAllPersistentData } from "../utils/storage";

interface CheckoutData {
    notes: string;
    phone_number: string;
    payment_method: string;
    delivery_options: string;
    address_id: string;
    wallet_id?: string;
}

interface AppContextType {
    user: User | null;
    businessAccounts: BusinessAccount[];
    currentProduct: Product | null;
    totalCarts: number;
    checkoutItems: Cart[];
    checkoutData: CheckoutData;
    totalWishlists: number;
    handleSetUser: (user: User) => void;
    handleLogout: () => void;
    setBusinessAccounts: React.Dispatch<React.SetStateAction<BusinessAccount[]>>;
    setCurrentProduct: React.Dispatch<React.SetStateAction<Product | null>>;
    setTotalCarts: React.Dispatch<React.SetStateAction<number>>;
    setTotalWishlists: React.Dispatch<React.SetStateAction<number>>;
    setCheckoutItems: React.Dispatch<React.SetStateAction<Cart[]>>;
    setCheckoutData: React.Dispatch<React.SetStateAction<CheckoutData>>;
}

export const AppContext = React.createContext<AppContextType | undefined>(undefined);

export const initialCheckoutData = {
    notes: '',
    phone_number: '',
    payment_method: '',
    delivery_options: '',
    address_id: '',
}

interface AppContextProviderProps {
    children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [ user, setUser ] = React.useState<User | null>(null);
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ businessAccounts, setBusinessAccounts ] = React.useState<BusinessAccount[]>([])
    const [ currentProduct, setCurrentProduct ] = React.useState<Product | null>(null);
    const [ totalCarts, setTotalCarts ] = React.useState(0);
    const [ totalWishlists, setTotalWishlists ] = React.useState(0);
    const [ checkoutItems, setCheckoutItems] = React.useState<Cart[]>([]);
    const [ checkoutData, setCheckoutData ] = React.useState<CheckoutData>(initialCheckoutData)

    const navigate = useNavigate();


    const handleSetUser = (user: User) => {
        setUser(user);
        persistStorage("user", user);
    };

    const handleLogout = () => {
        setUser(null);
        removeAllPersistentData();
        setTotalCarts(0)
        setTotalWishlists(0);
        navigate("/");
    }

    const contextValue: AppContextType = {
        user,
        businessAccounts,
        currentProduct,
        totalCarts,
        checkoutItems,
        checkoutData,
        totalWishlists,
        setCheckoutItems,
        setTotalCarts,
        setBusinessAccounts,
        setCurrentProduct,
        setCheckoutData,
        handleSetUser,
        handleLogout,
        setTotalWishlists,
    };

    const init = async () => {
        try {
            const authToken = localStorage.getItem('authToken');
            const currentPath = location.pathname.toLowerCase();
            const excludedPath = [
                '/',
                '/signin', 
                '/verifyemail', 
                '/shoppingcart',
                '/wishlist'
            ];

            const shouldRun =
                authToken &&
                !excludedPath.includes(currentPath) && 
                !location.pathname.toLowerCase().includes("auth");

            if(shouldRun) {
                const { status, data: response } = await axiosClient.get('user/profile-details');
                if (status === 200) {
                    const { userData, ...rest } = response.data;

                    // Run parallel requests
                    const cartRequest = axiosClient.get('/product/list-cart');
                    const wishlistRequest = axiosClient.get('/product/list-wish-list');
                    const businessRequest =
                        userData.userType === 'BUSINESS'
                        ? axiosClient.get('user/business/list-business-account')
                        : Promise.resolve({ data: { data: [] } }); // fallback empty result

                    const [cartResponse, wishlistResponse, businessResponse] = await Promise.all([cartRequest, wishlistRequest, businessRequest]);

                    setTotalCarts(cartResponse.data.data.length);
                    setTotalWishlists(wishlistResponse.data.data.length);
                    setBusinessAccounts(businessResponse.data.data);

                    handleSetUser({
                        ...userData,
                        ...rest,
                    });
                } else {
                    location.href = '/signin';
                    return;
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
        setIsLoading(false);
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
