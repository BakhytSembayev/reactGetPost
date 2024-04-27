import { useState } from "react";

export const useRequestAddVacuumCleaner = (refreshProducts) => {
    const [isCreating, setIsCreating] = useState(false);
   

    const requestAddVacuumCleaner =()=>{
        setIsCreating(true);
        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                name: 'VacuumCleaner',
                price: 300,
            }),
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log('playstation добавлен, ответ сервера:', response);
                refreshProducts();
            })
            .finally(() => setIsCreating(false));
    };

   
        return {
            isCreating,
           requestAddVacuumCleaner
        }
};