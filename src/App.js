import { useState } from 'react';
import styles from './App.css';
import {useRequestAddVacuumCleaner,
    useRequestDeleteHairDryer,
    useREquestGetProducts,
    useRequestUpdateSmartphone
} from './hooks';

export const App = () => {
    const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
    const refreshProducts =()=> setRefreshProductsFlag (!refreshProductsFlag)
    const {isLoading, products} = useREquestGetProducts(refreshProductsFlag);
    const {isCreating,requestAddVacuumCleaner} = useRequestAddVacuumCleaner (refreshProducts);
    const {isUpdating, requestUpdateSmartphone} = useRequestUpdateSmartphone(refreshProducts);
    const {isDeleting, requestDeleteHairDryer} = useRequestDeleteHairDryer(refreshProducts);

    
    return (
        <div className={styles.app}>
            {isLoading
                ? <div className='loader'></div>
                : products.map(({ id, name, price }) => (
                    <div key={id}>
                        {name} - {price} руб
                    </div>
                ))
            }
            <button
	            disabled={isCreating}
	            onClick={requestAddVacuumCleaner}
	        >Добавить новый</button>

<button disabled={isUpdating} onClick={requestUpdateSmartphone}>
                Обновить смартфон
            </button>
            <button disabled={isDeleting} onClick={requestDeleteHairDryer}>
                Удалить VacuumCleaner
            </button>
        </div>
    );
};

export default App;

//json-server --watch db.json --port 3001
