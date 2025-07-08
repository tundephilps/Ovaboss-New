import React from "react";
import axiosClient from "../utils/axiosClient";
import { Country } from "../types/country.type";

let fetchedCountries: Country[] | null = null;

const useCountry = () => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ countries, setCountries ] = React.useState<Country[]>([]);

    const getCountries = async () => {
        try {
            setIsLoading(true);

            if(fetchedCountries) {
                setCountries(fetchedCountries);
            }

            const { data: response } = await axiosClient.get("/user/list-country");

            const countries = response.data;

            setCountries(countries);
            fetchedCountries = countries;

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