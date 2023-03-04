import { useState } from "react";

function Campo () {
    const [texto, setTexto]= useState('');
    const [error, setError]= useState(false);

    const handleChange = (event) => {
        setTexto(event.target.value);
        setError(event.target.value !== 'A tope con React');
    };

    return (
        <div>
            <label htmlFor="campo"> Introduce: "A tope con React": </label>
            <input id="campo" type="text" value={texto} onChange={handleChange}/>
            {error && (
                <p syle={{color:'red'}}>El texto introducido no es correcto.</p>
            )}
        </div>
    );
}

export default Campo;
