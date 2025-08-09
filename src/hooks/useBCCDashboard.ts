import React from "react";
import useWallets from "./useWallets";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";
import { BCCAnalytics } from "../types/analytics.type";

const useBCCDashboard = () => {
    const [ analytics, setAnalytics ] = React.useState<BCCAnalytics>({
        totalProducts: 0,
        inActiveProduct: 0,
        activeProduct: 0,
        todayProducts: 0,
        approvedProducts: 0,
        pendingApprovalProducts: 0,
    });
    const [ isLoading, setIsLoading ] = React.useState(true);

    const { wallets, isLoading: isLoadingWallets } = useWallets();

    const getAnalytics = async () => {
        try {
            const { data: response } = await axiosClient.get('product/business/product-analytics');
            setAnalytics(response.data);
        } catch(error) {
            toast.error('Error getting dashboard stats');
        } finally {
            setIsLoading(false);
        }
    } 

    React.useEffect(() => {
        getAnalytics();
    }, [])

    return {
        isLoading,
        isLoadingWallets,
        wallets: wallets.bcc,
        analytics,
    }
}

export default useBCCDashboard;