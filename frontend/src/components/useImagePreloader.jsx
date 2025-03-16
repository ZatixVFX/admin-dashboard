import { useState, useEffect } from "react";

const useImagePreloader = (arr) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    arr.map((data, index) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onLoad = () => resolve(img);
        img.onerror = img.onabort = () => reject(data.img);
        img.src = data.img;
      });
    });
    setImgLoaded(true);
  }, [arr]);

  return imgLoaded;
};

export default useImagePreloader;
