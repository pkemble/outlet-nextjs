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

        
        setState({
            status: "LOADED",
            outletData: {
                posts: fetchOutletData("getPosts"),
                notebooks: fetchOutletData("getNotebooks")
            }
        });
        
    }, []);
    
    async function fetchOutletData(funcName) {
       return APICall(funcName);
    }
    
    async function APICall(funcName) {
        const f = { "func": funcName };
        console.log(JSON.stringify(f));
        const response = await axios.post(`http://localhost:3000/api`, f)
            .then(function (response) {
                if (response.data) {
                    return response.data
                } else {
                    setState({
                        status: 'ERROR',
                        outletData: response.error
                    });
                }
            })
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