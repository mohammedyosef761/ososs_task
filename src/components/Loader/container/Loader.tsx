

import React from 'react';
import { LoaderProps } from '../types';
import '../styles/styles.scss';

export const Loader: React.FC<LoaderProps> = ({ size = 50, color = "#000" }) => {
    let sizeClass = "medium";

    if (size <= 30) sizeClass = "small";
    else if (size >= 70) sizeClass = "large";

    return (
        <div className='lodaer-container'>
            <div className={`loader ${sizeClass}`} style={{ color }}></div>
        </div>
    );
};
