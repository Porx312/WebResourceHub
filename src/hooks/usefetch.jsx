import { useState, useEffect } from "react";

const useFetch = (category) => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://rest-api-webresource-dev-xhdp.4.us-1.fl0.io/${category}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    return {
        todos,
        loading,
        error
    };
};

export default useFetch;
