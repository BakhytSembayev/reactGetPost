import { useState } from "react";

export const useRequestDeleteHairDryer = (refreshProducts) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const requestDeleteHairDryer = () => {
        setIsDeleting(true);
        fetch('http://localhost:3001/products/004', {
            method: 'DELETE',
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log('vacuumCleaner удалён, ответ сервера: ', response);
                refreshProducts();
            })
            .finally(() => setIsDeleting(false));
    };
    return {
        isDeleting,
        requestDeleteHairDryer
    };
};