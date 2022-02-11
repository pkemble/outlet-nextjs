import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const useOutletData = () => {
    return useContext(DataContext);
}

export function DataContextProvider({ children }) {

    const [state, setState] = useState({
        status: 'LOADING',
    });

    function updateOutletData(dataFilter) {
        console.log("updating outlet data");
        if (!dataFilter) {
            fetchOutletData();
            return;
        }
        console.log("running updateOutletData with: " + dataFilter);
        const filter = {
            "func": "getPostsByNotebook",
            "notebook_id": dataFilter
        };
        fetchOutletData("POST", filter);
    }

    useEffect(() => {
        setState({
            status: 'LOADING',
        });

        fetchOutletData();

    }, []);

    async function fetchOutletData(method, filter) {
        switch (method) {
            case 'POST':
                await axios.post("/api", filter)
                    .then((response => {
                        if (response.data) {
                            setState({
                                status: 'LOADED',
                                ...response.data
                            })
                        } else {
                            setState({
                                status: 'ERROR',
                                ...response.error
                            });
                        }
                    }))
                    .catch(function (error) {
                        console.log(error);
                    });
                break;
            default:
                await axios.get("/api")
                    .then((response => {
                        if (response.data) {
                            setState({
                                status: 'LOADED',
                                ...response.data
                            })
                        } else {
                            setState({
                                status: 'ERROR',
                                ...response.error
                            });
                        }
                    }))
                    .catch(function (error) {
                        console.log(error);
                    });
                break;
        }
    }

    return (
        <DataContext.Provider value={{ state: state, updateOutletData: updateOutletData }}>
            {children}
        </DataContext.Provider>
    );
}