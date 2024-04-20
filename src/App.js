import { useEffect, useState } from 'react';
import styles from './App.css';

export const App = () => {
    const [products, setProducts] = useState([]);
    const [refreshProducts, setRefreshProducts] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch('http://localhost:3001/products')
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
                setProducts(loadedProducts);
            })
            .finally(() => setIsLoading(false));
    }, [refreshProducts]);

    const requestAddVacuumCleaner = () => {
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
                setRefreshProducts(!refreshProducts);
            })
            .finally(() => setIsCreating(false));
    };
    const requestUpdateSmartphone = () => {
        setIsUpdating(true);

        fetch('http://localhost:3001/products/002', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                name: 'Смартфон',
                price: 30900,
            }),
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log('Смартфон обновлён, ответ сервера:', response);
                setRefreshProducts(!refreshProducts);
            })
            .finally(() => setIsUpdating(false));
    };

    const requestDeleteHairDryer = () => {
        setIsDeleting(true);
        fetch('http://localhost:3001/products/b919', {
            method: 'DELETE',
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log('Фен удалён, ответ сервера: ', response);
                setRefreshProducts(!refreshProducts);
            })
            .finally(() => setIsDeleting(false));
    };

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
                Удалить фен
            </button>
        </div>
    );
};

export default App;
