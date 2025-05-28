import axios from "axios";
import { useEffect, useState } from "react"

export function useFetch<T = unknown>(uri: string) {

    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        getData(uri);
    }, [])

    async function getData(uri: string) {
        let res = await axios.get(uri);

        setData([...res.data.products]);

    }


    return { data }
}