
function Nombredad() {  
    const usuarios = [  
        { name: 'Sergio', age: 28 },  
        { name: 'Victoria', age: 27 },  
        { name: 'Iván', age: 30 },  
        { name: 'Liviu', age: 26 } ];  

    return (  
        <div>  
            <p>Usuarios:</p>  
            <ul> {usuarios.map((usuario, index) => (  
            <li key={index}> {usuario.name} - {usuario.age} años </li> ))}  
            </ul>  
        </div>
); }  

export default Nombredad; 
