import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


class Formulario extends Component {

    // Creando refs,(para leer datos de formulario)

    MarcaRef = React.createRef();
    AñoRef = React.createRef();
    PlanBasicoRef = React.createRef();
    PlanCompletoRef = React.createRef();
    
    // Creamos el metodo que manejara los datos en este caso es el "cotizador() pero le puse handle de manejador"
    handle = (e) => {
        e.preventDefault();  // prevenir comportamiento por defecto del navegador, envio de form a la url con variables.    
    
    // El ref "plan" tiene dos opciones, asi que se construye un if para chequear si es uno o el otro
    const plan = this.PlanBasicoRef.current.checked ? "basico":"completo";

    //Obtener los datos, como seria el formato para obtener esos datos (Es un ejemplo de referencia)?
    console.log(this.PlanBasicoRef.current.value);

    // Crear el objeto
    const infoAuto = {
        marca: this.MarcaRef.current.value,
        año: this.AñoRef.current.value,
        plan: plan
    }

    // Enviando el objeto creado a consola para comprobar como sale
    //console.log(infoAuto);

     //IMPORTANTE: RECIBIENDO PROPS DEL COMPONENTE MAESTRO el cual esta basado en una funcion crada en el componente maestro
     //IMPORTANTE: Le insertamos como parametro el objeto creado.
    this.props.cotizarSeguros(infoAuto);

    // Reseteando el formulario despues de hacer una interaccion, dependiendo de la experiencia de usuario que se le quiera dar
    e.currentTarget.reset();
};

    // Enviar el objeto al componente principal



    render(){
        return(
            // Envio de formulario con metodo que provee React
            <form className="cotizar-auto" onSubmit = {this.handle} >   
                <div className="campo">
                    <label>Marca</label>
                    <select className= 'form-control' name="marca" ref={this.MarcaRef} >
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select className='form-control' name="year" ref={this.AñoRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basico" ref={this.PlanBasicoRef}/> Básico
                    <input type="radio" name="plan" value="completo" ref={this.PlanCompletoRef}/> Completo
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">Cotizar</button>
                
            </form>

        );
    }
}

export default Formulario;



