

import React from 'react';

type ProductImageProps = {
    src: string;
    alt: string;
};

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = 'https://th.bing.com/th/id/R.62327028e79082f2c4df15f4ec968b6c?rik=Jrmv9T2wVrs4Zg&pid=ImgRaw&r=0';
    };

    return <img onError={handleImageError} src={src} alt={alt} className="product-image" />;
};
