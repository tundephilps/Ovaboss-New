import React from "react";
import axiosClient from "../utils/axiosClient";
import { City, Country, State } from "../types/country.type";
import toast from "react-hot-toast";

let fetchedCountries: Country[] | null = null;
let fetchedStates: Record<string, State[]> | null = null;
let fetchedCities: Record<string, City[]> | null = null;

const useCountry = () => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ isLoadingStates, setIsLoadingStates ] = React.useState(false);
    const [ isLoadingCities, setIsLoadingCities ] = React.useState(false);
    const [ countries, setCountries ] = React.useState<Country[]>([]);
    const [ states, setStates ] = React.useState<State[]>([]);
    const [ cities, setCities ] = React.useState<City[]>([]);

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

    const getStates = async (countryId: number) => {
        try {
            setIsLoadingStates(true);

            if(fetchedStates && fetchedStates[countryId]) {
                setStates(fetchedStates[countryId]);
                return fetchedStates[countryId];
            }

            const { data: response } = await axiosClient.get(`/user/list-state?countryId=${countryId}`);

            const states = response.data;

            setStates(states);
            fetchedStates = {};
            fetchedStates[countryId] = states;

            return states as State[];

        } catch(error) {
            toast.error('Error getting states')
        } finally {
            setIsLoadingStates(false);
        }
    }

    const getCities = async (stateId: number) => {
        try {
            setIsLoadingCities(true);

            if(fetchedCities && fetchedCities[stateId]) {
                setCities(fetchedCities[stateId]);
            }

            const { data: response } = await axiosClient.get(`/user/list-city?stateId=${stateId}`);

            const cities = response.data;

            setCities(cities);
            fetchedCities = {};
            fetchedCities[stateId] = cities;

            return cities as City[];

        } catch(error) {
            toast.error('Error getting cities')
        } finally {
            setIsLoadingCities(false);
        }
    }

    React.useEffect(() => {
        getCountries()
    }, [])

    return {
        isLoading,
        isLoadingStates,
        isLoadingCities,
        countries,
        states,
        cities,
        getStates,
        getCities,
    }
}

export default useCountry;