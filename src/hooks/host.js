import { useReducer, useEffect } from "react";

export default function useHost() {
    const [local, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'host':
                return { ...state, host: action.payload }
            case 'port':
                return { ...state, port: action.payload }
        }
    }, {host: "127.0.0.1", port: 8080});

    useEffect(() => {
        (async () => {
            const localServer = await settings.local();
            dispatch({type: 'host', payload: localServer.host});
            dispatch({type: 'port', payload: localServer.port});
        })();
    }, [local.host, local.port])

    return [local, dispatch];
}