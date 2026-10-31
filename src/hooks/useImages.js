import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useImages = ({ category }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getImages = async () => {
            const data = await getGifs(category);
            console.log(data);
            setImages(data);
            setLoading(false);
        };

        getImages();
    }, []);

    return {
        images,
        loading,
    };
};

export default useImages;