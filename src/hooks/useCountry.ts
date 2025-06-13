import React from "react";
import axiosClient from "../utils/axiosClient";

const useCountry = () => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ countries, setCountries ] = React.useState([]);

    const getCountries = async () => {
        try {
            setIsLoading(true);

            const { data } = await axiosClient.get("/user/list-country");

            const countries = data.data;

            setCountries(countries);

        } catch(error) {
            console.error("Error getting countries")
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getCountries()
    }, [])

    return {
        isLoading,
        countries,
    }
}

export default useCountry;