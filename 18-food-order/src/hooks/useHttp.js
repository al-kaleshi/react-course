import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);

    const resData = await response.json();
    if (!response.ok) {
        throw new Error(resData.message || "Something went wrong, failed to send request");
    }

    return resData;
}

function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const clearData = () => {
        setData([]);
    }

    const sendRequest = useCallback(async (data) => {
        setIsLoading(true);
        try {
            const resData = await sendHttpRequest(url, { ...config, body: data });
            setData(resData);
        } catch (error) {
            setError(error.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, [url, config]);

    useEffect(() => {
        if (config && (config.method === 'GET' || !config.method) || !config) {
            sendRequest()
        }
    }, [sendRequest, config])

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData,
    };
}

export default useHttp;