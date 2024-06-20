import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category) => {
    const [state, setState] = useState<any>({
        data: [],
        loading: true
    })
    useEffect(() => {
        setState({ data: [], loading: true });
        getGifs(category)
            .then((img) =>
                setState({
                    data: img,
                    loading: false
                })
            )
            .catch((error) => console.log(error));
    }, [category])
    return state;
}

