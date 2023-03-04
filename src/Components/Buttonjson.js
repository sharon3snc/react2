import {useState} from 'react';

function Buttonjson () {
    const [json, setJson] = useState(null);

    const handleClick = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        setJson(data);
    };

    return(
        <div>
            <button onClick={handleClick}>Cargar JSON</button>
            {json && (
                <pre>{JSON.stringify(json,null,2)}</pre>
            )}
        </div>
    );
}

export default Buttonjson;