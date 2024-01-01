import { useEffect, useState } from "react";

const useFetch = <T>(route: string, initial: T) => {

    const [response, setResponse] = useState<T>(initial);
    const [status, setStatus] = useState<"error" | "loading" | "success">("loading");

    useEffect(() => {
        const controller = new AbortController();

        // 5s request timeout
        const timeout = setTimeout(() => {
            controller.abort();
            setStatus("error");
        }, 5000);

        (async () => {
            setStatus("loading")
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}${route}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    signal: controller.signal
                });
                const json = await response.json();
                if (+response.status === 401 || +response.status === 403) throw new Error("Invalid Token!")
                if (+response.status === 500) setStatus("error");
                setResponse(json);
                clearTimeout(timeout);
                setStatus("success");
            } catch (err) {
                console.error(err);
            }
        })();

        return () => {
            controller.abort();
            clearTimeout(timeout);
        }
    }, []);

    return { response, status };
}

export default useFetch;
