import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const useOutletData = () => {
    return useContext(DataContext);
}

export function DataContextProvider({ children }) {

    const [state, setState] = useState({
        status: 'LOADING',
    });

    useEffect(() => {
        setState({
            status: 'LOADING',
        });

        fetchOutletData();

    }, []);

    async function fetchOutletData() {
        await axios.get(`http://localhost:3000/api`)
            .then((response => {
                if (response.data) {
                    setState({
                        status: 'LOADED',
                        outletData: response.data
                    })
                } else {
                    setState({
                        status: 'ERROR',
                        outletData: response.error
                    });
                }
            }))
            .catch(function (error) {
                console.log(error);
            });
    }
    const postsByNotebook = false;

    // const notebooks = async (req, res) => {
    //     const f = { "func": "getNotebooks" };
    //     req = await fetch(`http://localhost:3000/api`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         method: 'POST',
    //         body: JSON.stringify(f),
    //     }) || []
    // }

    //const outletData = [notebooks, posts, postsByNotebook];

    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    );
}