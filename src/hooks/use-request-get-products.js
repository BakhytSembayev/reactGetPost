import { useEffect,useState } from "react";
import { ref,onValue } from "firebase/database";
import { db } from "../firebase";

export const useREquestGetProducts =()=>{

    const [products, setProducts] = useState([]);    
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const productsDbRef = ref(db, 'products');

        return onValue(productsDbRef,(snapshot)=>{
const loadedProducts=snapshot.val() || [];
console.log(loadedProducts);
setProducts(loadedProducts);
setIsLoading(false);
        });
       
    }, []);

    return {
        isLoading,
        products
    };
};


