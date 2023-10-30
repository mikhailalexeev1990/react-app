import React, {useState, useEffect, Component, useCallback, useMemo} from "react";

const useEffectTest = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button onClick={() => setValue((v) => v + 1)}>[+]</button>
                <button onClick={() => setValue((v) => v - 1)}>[-]</button>
                <button onClick={() => setVisible(false)}>Hide</button>
                <PlanetInfo id={value}/>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => setVisible(true)}>Show</button>
            </div>
        )
    }
}

const usePlanetInfo = (id) => {
    const request = useCallback(
        () => getPlaten(id),
        [id]
    );

    return useRequest(request);
}

const getPlaten = (id) => {
    if (id <= 0) {
        return Promise.reject('id must be greater than 0');
    }

    return fetch(`https://swapi.dev/api/planets/${id}/`)
        .then(res => res.json())
        .then(data => data);
}

const useRequest = (request) => {
    const initialState = useMemo(() => ({
        data: null,
        loading: true,
        error: null
    }), []);

    const [data, setData] = useState(initialState);

    useEffect(() => {
        setData(initialState);

        let canceled = false;
        request()
            .then(data => !canceled && setData({
                data,
                loading: false,
                error: null
            }))
            .catch(error => !canceled && setData({
                data: null,
                loading: false,
                error
            }))
        ;

        return () => canceled = true;
    }, [request, initialState]);

    return data;
}

const PlanetInfo = ({id}) => {
    const {data, loading, error} = usePlanetInfo(id);

    if (error) {
        return <div>{error}</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <p>{id} - PlanetInfo</p>
            <p>{data.name}</p>
        </div>
    )
}

export default useEffectTest;
