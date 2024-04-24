import { useEffect, useState } from "react"
import CompUseEffect2 from "./CompUseEffect2";

const CompUseEffect = () => {
    const [contador, setContador] = useState(0);
    const [curso, setCurso] = useState("Desarrollo Web");
    const [visible, setVisible] = useState(true);
    console.log("1- Montaje del Componente");

    function incrementar() {
        setContador(contador + 1);
        
        if (contador % 2 == 0) {
            setCurso("JavaScript");
        } else {
            setCurso("Desarrollo Web");
        }

        if (contador >= 10) {
            setVisible(false);
        }
    }

    function modificarCurso() {
        setCurso("Marketing Online");
    }

    /* useEffect(() => {
        console.log("2- Actualización del Componente");
        setCurso("React JS");        
    }, []); //Opción #1 - Se dispara una sola vez en el montaje del componente */

    useEffect(() => {
        console.log("2- Actualización del Componente");
        //setCurso("React JS");
        
        return () => {
            console.log("3- Desmontaje del Componente");
        }
    }, [contador]); //Opción #2 - Se dispara todo el tiempo cuando tenga modificaciones el estado contador

    /* useEffect(() => {
        console.log("2- Actualización del Componente");
        //setCurso("React JS");  
        //console.log("Llamada a API"); // Llamada a una API      
    }); //Opción #3 - Escucho todos los estados */

    return (
        <div>
            <p>Contador: {contador}</p>
            <p>Curso: {curso}</p>
            <p><button className="btn btn-primary" onClick={incrementar}>Incrementar</button></p>
            <p><button className="btn btn-primary" onClick={modificarCurso}>Modificar Curso</button></p>
            {visible ? <CompUseEffect2 curso={"Curso de Fotografía"} /> : ""}
        </div>
    )
}

export default CompUseEffect;