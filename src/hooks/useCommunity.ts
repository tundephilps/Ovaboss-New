import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";

const useCommunity = ({ type }: { type: 'pcm' | 'aqm' }) => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ community, setCommunity ] = React.useState([]);

    const getCommunity = async () => {
        try {
            setIsLoading(true);
            
            const { data: response } = await axiosClient.get(`/user/list-${type}`);

            setCommunity(response.data);

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getCommunity();
    }, [])

    return {
        isLoading,
        community,
    }
}

export default useCommunity;