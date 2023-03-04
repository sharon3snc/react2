import { useState } from "react";

const Form = () => { 

    const [name, setName] = useState(''); 
    const [firstName, setFirstName] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [gender, setGender] = useState(''); 
    const [age, setAge] = useState(''); 
    const [country, setCountry] = useState('Spain'); 
    const [province, setProvince] = useState('Madrid'); 
    const [hobbies, setHobbies] = useState({ 
      games: false, 
      football: false, 
      basketball: false, 
      art: false,
    });
    
    const handleNameChange = (e) => setName(e.target.value); 
    const handleFirstNameChange = (e) => setFirstName(e.target.value); 
    const handleDescriptionChange = (e) => setDescription(e.target.value); 
    const handleGenderChange = (e) => setGender(e.target.value); 
    const handleAgeChange = (e) => setAge(e.target.value); 
    const handleCountryChange = (e) => setCountry(e.target.value); 
    const handleProvinceChange = (e) => 
        setProvince(e.target.value === 'Spain' ? 'Madrid' : ''); 
    const handleHobbiesChange = (e) => 
    setHobbies({ ...hobbies, [e.target.name]: e.target.checked }); 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        console.log({name, firstName, description, gender, age, country, province, hobbies}); 
      };
      
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label> Name: <input type="text" value={name} onChange={handleNameChange} /> </label> 
            <br /> 
    
            <label> Firstname: <input type="text" value={firstName} onChange={handleFirstNameChange} /> </label>
            <br /> 
    
            <label> Description: <textarea value={description} onChange={handleDescriptionChange} /> </label> 
            <br /> 
    
            <label> Gender:
                <label> <input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange}/> 
                    Male 
                </label>
                <label> <input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange}/> 
                    Female 
                </label> 
            </label>
            <br />

            <label> Age: <input type="number" value={age} onChange={handleAgeChange} /> </label> 
            <br /> 

            <label> Country: 
                <select value={country} onChange={handleCountryChange}> 
                    <option value="Spain">Spain</option> 
                    <option value="USA">USA</option> 
                </select> 
            </label> 
            <br />
            
            {country === 'Spain' && ( 
                <label> Province: 
                  <select value={province} onChange={handleProvinceChange}> 
                    <option value="Madrid">Madrid</option> 
                    <option value="Guadalajara">Guadalajara</option> 
                  </select> 
                </label> 
              )} 
              <br /> 
        
              <label> Hobbies: 
                <label> <input type="checkbox" name="games" checked={hobbies.games} onChange={handleHobbiesChange}/> 
                    Games
                </label>
                <br />
                <label> <input type="checkbox" name="football" checked={hobbies.football} onChange={handleHobbiesChange}/>
                    Football
                </label>
                <br />
                <label> <input type="checkbox" name="basketball" checked={hobbies.basketball} onChange={handleHobbiesChange}/>
                Basketball
                </label>
                <br />
                <label> <input type="checkbox" name="art" checked={hobbies.art} onChange={handleHobbiesChange}/>
                Art
                </label>
                <br />
            </label>
            
            <button type="submit">Enviar</button>
        </form>
        </>
        );
}

export default Form;