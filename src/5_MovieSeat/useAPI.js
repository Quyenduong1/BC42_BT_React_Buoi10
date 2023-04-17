import {useState, useEffect} from 'react'

function useAPI(requestAPI, options) {
    const {depedencies = []} = options;
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const request = async () => {
        try {
            setLoading(true);
            const response = await requestAPI();
            setData(response.data);
        } catch (error) {
            setError(error.response.data.message || "something went wrong");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        request();
    }, [...depedencies])

  return { data, loading, error };
}

export default useAPI