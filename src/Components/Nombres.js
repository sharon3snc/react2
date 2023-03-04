function Nombres () {
    const lista = ['sergio', 'victoria', 'iván', 'liviu'];

    return (
        <div>
            <p> Lista: </p>
            <ul>
            {lista.map((usuario, index) => (<li key={index}>{usuario}</li>))} 
            </ul>
        </div>
    );
}

export default Nombres;

