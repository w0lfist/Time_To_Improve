import { useState } from "react";
import axios from "axios"


function SingIn() {

    const [name, setName] = useState("")
    const [last_name, setLastName] = useState("")
    const [user_name, setUserName] = useState("")
    const [age, setAge] = useState("")
    const [sex, setSex] = useState("")
    const [training_level, setTrainingLevel] = useState("")
    const [disc_or_dise, setDiscOrDise] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handlesubmint = async (e) => {
        e.preventDefault();

        // Verificar si se ha seleccionado "..." en algún select
        if (sex === "" || training_level === "" || disc_or_dise === "") {
            alert("Por favor selecciona una opción válida en todos los campos");
            return;
        }
        const res = await axios.post("http://127.0.0.1:8000/api/users", {
            name,
            last_name,
            user_name,
            age,
            sex,
            training_level,
            disc_or_dise,
            email,
            password, 
        });
        
        console.log(res);
        
        e.target.reset();
    };
   

    return (
        <div>
            <form onSubmit={handlesubmint}>
                <input 
                    type="text" 
                    placeholder="Nombre"
                    onChange={(e) => setName(e.target.value)}     
                /><br/>
                
                <input 
                    type="text" 
                    placeholder="Apellido" 
                    onChange={(e) => setLastName(e.target.value)}    
                /><br/>

                <input 
                    type="text" 
                    placeholder="Nombre de Usuario"
                    onChange={(e) => setUserName(e.target.value)}     
                /><br/>
                
                <input 
                    type="number" 
                    placeholder="Edad"
                    onChange={(e) => setAge(e.target.value)}     
                /><br/>

                <label htmlFor="Sex">Sexo</label><br/>
                <select name="" id="Sex" onChange={(e) => setSex(e.target.value)}    >
                    <option value="option">...</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select><br/>
                
                <label htmlFor="trainingLvl">Nivel de entrenamiento</label><br/>
                <select name="" id="trainingLvl" onChange={(e) => setTrainingLevel(e.target.value)}    >
                    <option value="option">...</option>
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                </select><br/>
                
                <label htmlFor="discOrDise">Discapacidad o enfermedad</label><br/>
                <select name="" id="discOrDise" onChange={(e) => setDiscOrDise(e.target.value)}    >
                    <option value="option">...</option>
                    <option value="Ninguna">Ninguna</option>
                    <option value="Enfermedad Respiratoria">Enfermedad Respiratoria</option>
                    <option value="Lesion leve en brazo/s">Lesion leve en brazo/s</option>
                    <option value="Lesion leve en pierna/s">Lesion leve en pierna/s</option>
                </select><br/>
                
                <input 
                    type="email" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}     
                /><br/>
                
                <input 
                    type="password"  
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}     
                /><br/>

                <input type="submit"/>
            </form>    
        </div>
    );
}

export default SingIn;