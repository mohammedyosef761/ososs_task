import React from "react";

type ProductImageProps = {
  src: string;
  alt: string;
};

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src =
      "https://www.bing.com/images/search?view=detailV2&ccid=sFf0KChH&id=8321A9FF196FE58A5C0CE6A3B66239765BC78F5B&thid=OIP.sFf0KChHJlQHrKrlY9h_5wHaGa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b057f4282847265407acaae563d87fe7%3frik%3dW4%252fHW3Y5Yraj5g%26riu%3dhttp%253a%252f%252fc1.staticflickr.com%252f3%252f2098%252f2204746179_f1cac2ef5f.jpg%26ehk%3dDFhXQsM6YNOlIrCiCd4WqP0u%252fGrZoEYap%252bBdwCCOCq4%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=432&expw=499&q=add+photo+please+images&simid=608023909215927215&FORM=IRPRST&ck=64288E0755224E513E0BE61610A672B6&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0";
  };

  return (
    <img
      onError={handleImageError}
      src={src}
      alt={alt}
      className="product-image"
    />
  );
};
