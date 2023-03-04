import {useState, useEffect} from 'react';

function Crono () { 

    const [seconds, setSeconds] = useState (0); 
    const [running, setRunning] = useState (false); 

    useEffect (()=> { 
        let interval; 
        if (running) { 
            interval = setInterval (()=> { 
                setSeconds(seconds=> seconds +1); 
            }, 1000); 
        } 

        return () => clearInterval(interval); 
    }, [running]); 

    const handleClick =() => { 
        setRunning(!running); 
    }; 


return ( 
    <div> 
        <p> {seconds} segundos </p> 
        <button onClick={handleClick}> {running ? 'stop': 'start'} </button> 
    </div> 
   ); 
} 

export default Crono;