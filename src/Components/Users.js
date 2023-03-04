import {useEffect, useState} from 'react';

function Users () {
    const [state, setState] = useState ({
        users: ['Ana', 'Laura']
    });

    useEffect (() => {
        setState(state=>({
            ...state, users:[...state.users,'Pedro']
        }));

        return () => {
            console.log('¡Componente destruido!');
        };
    }, []);


    return(
        <div>
            <p>Usuarios:</p>
            <ul>
                {state.users.map((user,index)=> (
                    <li key={index}> {user} </li>
                ))}
            </ul>
        </div>
    );    
}

export default Users;
