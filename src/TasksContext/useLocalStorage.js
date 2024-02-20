import React from "react";

function useLocalStorage(itemName, valorInicial){

    const [item, setItem] = React.useState(valorInicial);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const parsedItem = React.useRef(null);
  
    React.useEffect( () => {
        setTimeout( () => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                if(localStorageItem){
                    parsedItem.current = JSON.parse(localStorageItem);
                    setItem(parsedItem.current);
                }else{
                    parsedItem.current = valorInicial;
                    localStorage.setItem(itemName, JSON.stringify(parsedItem.current));  
                }
                setLoading(false);
            }catch(error){
                setLoading(false);
                setError(true);
            }
        }, 2000 );
    }, [itemName, valorInicial]);
  
    const saveChanges = (newTasks) => {
      setItem(newTasks);
      localStorage.setItem(itemName, JSON.stringify(newTasks));
    }
  
    return {
        item,
        saveChanges,
        loading,
        error,
    };
}

export { useLocalStorage }