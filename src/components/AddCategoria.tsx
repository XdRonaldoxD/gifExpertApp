import { useState } from "react"

export const AddCategoria = ({setCategorias}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputSubmit = (e) => {
        const text = e.target.value;
        setInputValue(text);
    }
    const handleSumit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length>1) {
            // console.log(inputValue);
            //PARA QUE APARESCA PRIMERO
            setCategorias(cats => [inputValue,...cats]); //POSEE EL ESTADO ANTERIOR DE LA CATEGORIA EN EL ARREGLO CATS 
            setInputValue('')
        }

    }

    return (
        <form onSubmit={(e) => handleSumit(e)}>
            <input type="text"
                value={inputValue}
                onChange={(e) => handleInputSubmit(e)}
            />
        </form>
    )
}
