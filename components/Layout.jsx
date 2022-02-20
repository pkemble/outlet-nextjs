import React from 'react';
import { DataContextProvider } from '../context/DataContext';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <DataContextProvider>
            <Header />
            {children}
        </DataContextProvider>
    )
};

export default Layout;
