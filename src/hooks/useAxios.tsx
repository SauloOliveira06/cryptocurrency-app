import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const useAxios = (param: any) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async (param: any) => {

        axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

        try {
            setLoading(true);
            const result = await axios(param);
            setResponse(result.data);
        } catch (err: any) {
            if (typeof err === "string") {
                setError(err);
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(param);
    }, [])

    return { response, loading, error }
}

export default useAxios;