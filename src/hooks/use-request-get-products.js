import { useEffect,useState } from "react";

export const useREquestGetProducts =(refreshProductsFlag)=>{

    const [products, setProducts] = useState([]);    
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    
        fetch('http://localhost:3001/products')
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
                setProducts(loadedProducts);
            })
            .finally(() => setIsLoading(false));
    }, [refreshProductsFlag]);

    return {
        isLoading,
        products
    };
};


