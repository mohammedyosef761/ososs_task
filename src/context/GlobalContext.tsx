

import React, { createContext, useContext, useCallback, useState } from 'react';
import { useCrudCart, useToast } from '../hooks';
import { Toaster } from '../components';
import { GlobalContextProps } from '../types';
import { ProductStatus } from '../components/Product/types';

export const GlobalContext = createContext<GlobalContextProps | undefined>({
    cart: [],
    productStatus: {},
    updateProductState: () => { },
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
    updateProductQuantity: () => { },
    showToast: () => { }
});

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

type Props = {
    children: React.ReactElement;
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
    const [productStatus, setproductStatus] = useState<Record<number,ProductStatus>>({});

    const updateProductState = useCallback((productId: number, state:ProductStatus) => {
        setproductStatus(prevStates => ({
            ...prevStates,
            [productId]: state
        }));
    }, []);

    const { toastMessage, toastType, showToast } = useToast();
    const { cart, addToCart, removeFromCart, clearCart, updateProductQuantity } = useCrudCart(showToast, updateProductState);

    return (
        <GlobalContext.Provider value={{ cart, addToCart, showToast, removeFromCart, clearCart, updateProductQuantity, productStatus, updateProductState }}>
            {children}
            {toastMessage && <Toaster message={toastMessage} type={toastType} />}
        </GlobalContext.Provider>
    );
};

