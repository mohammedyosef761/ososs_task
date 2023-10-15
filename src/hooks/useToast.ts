

import { useState, useCallback } from 'react';
import { ToasterType } from '../types';

export const useToast = () => {
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [toastType, setToastType] = useState<ToasterType | null>(null);

    const showToast = useCallback((message: string, type: ToasterType) => {
        setToastMessage(message);
        setToastType(type);
        setTimeout(() => {
            setToastMessage(null);
            setToastType(null);
        }, 3000);
    }, []);

    return { toastMessage, toastType, showToast };
};
