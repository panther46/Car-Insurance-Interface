import React, {Component} from 'react';
import {primeraMayuscula} from '../helper.js';


class Resumen extends Component{

    // Creamos un metodo aparte que nos permite esconder todo el div en caso de que no se seleccione nada, trasladamos el distructuing aqui
    mostrarResumen = () =>{
                const {marca, año, plan} = this.props.datos;

                if (!marca || !año || !plan ) return null;

                return(
                <div className = "Resumen">
                    <h2>Resumen de cotizacion</h2>
                    <li>Marca:{primeraMayuscula(marca)}</li>
                    <li>Plan: {primeraMayuscula(plan)}</li>
                    <li>Año del auto:{año}</li>
                </div>
                )
    }

    render() {
        
        return(
            // En el return del componente ejecutamos el div y dentro el metodo creado
            <div className= "Resumen">
                {this.mostrarResumen()}
            </div>

        )
    }
    

};


export default Resumen;
    
