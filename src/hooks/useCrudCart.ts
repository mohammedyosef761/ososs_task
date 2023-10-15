

import { useState, useCallback } from 'react';
import { Products } from '../types';
import {ProductStatus } from '../components/Product/types';

export const useCrudCart = (showToast: Function, updateProductState: Function) => {
    const [cart, setCart] = useState<Products[]>([]);

    const addToCart = useCallback((product: Products) => {
        if (!cart.some(p => p.id === product.id)) {
            setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
            showToast('Item added to cart!', 'success');
        } else {
            showToast('Product is already in the cart!', 'error');
        }
    }, [showToast, cart]);

    const removeFromCart = useCallback((productId: number) => {
        setCart(prevCart => prevCart.filter(product => product.id !== productId));
        updateProductState(productId,ProductStatus.NORMAL);
        showToast('Item removed from cart!', 'success');
    }, [showToast, updateProductState]);

    const clearCart = useCallback(() => {
        cart.forEach(product => {
            updateProductState(product.id,ProductStatus.BOUGHT);
        });
        setCart([]);
    }, [cart, updateProductState]);

    const updateProductQuantity = useCallback((productId: number, quantity: number) => {
        setCart(prevCart =>
            prevCart.map(product =>
                product.id === productId ? { ...product, quantity } : product
            )
        );
    }, []);

    return { cart, addToCart, removeFromCart, clearCart, updateProductQuantity };
};
