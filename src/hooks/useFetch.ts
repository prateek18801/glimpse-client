import { useEffect, useState } from "react";

const useFetch = <T>(route: string, initial: T) => {

    const [error, setError] = useState<any>(null);
    const [response, setResponse] = useState<T>(initial);
    const [loading, setLoading] = useState<boolean>(true);    

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}${route}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_KEY}`
                    },
                    signal: controller.signal
                });
                const json = await response.json();
                if (+response.status === 401 || +response.status === 403) throw new Error("Invalid Token!")
                if (+response.status === 500) throw new Error("Internal Server Error!");
                setResponse(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();

        return () => {
            controller.abort();
        }
    }, []);
    
    return { response, loading, error};
}

export default useFetch;
