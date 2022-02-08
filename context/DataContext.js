import { createContext } from 'react';
//import { getPostsByNotebook } from '../pages/api';

export const DataContext = createContext();

const posts = async () => {
    const f = { "func": "getPosts" };
    const res = await fetch(`/api/`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(f),
    }) || []
    return {res};
}

const notebooks = async () => {
    const f = { "func": "getNotebooks" };
    const res = await fetch(`/api/`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(f),
    }) || []
    return res;
}

const postsByNotebook = false;

const outletData = [notebooks(), posts(), postsByNotebook];

function DataContextProvider(props) {
    return (
        <DataContext.Provider outletData={outletData}>
            {props.children}
        </DataContext.Provider>
    );
}


export default DataContextProvider;