import React, { Component } from 'react';
import Header from './Header.js';
import Formulario from './Formulario.js';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resumen from './Resumen.js';
import Resultado from './Resultado.js';


class App extends Component {

  // Creando estado vacio despues de desarrollar el metodo con los helpers, este estado se poblara  al final del metodo
  state = {
    resultado:'',
    datos: {}
  }

// Creando la funcion que se va a comunicar con el objeto creado en el formulario

cotizarSeguros = (datos) => {
  // Destructuring de objeto (se obtienen las variables del objeto y se almacenan en la veriable datos)
  const {marca, plan, año} = datos;

// Agregar una base de precio de 2.000
let resultado = 2000;
// Calcular diferencia de año
const diferencia = obtenerDiferenciaAnio(año);
// Por cada año se resta el 3% del valor a la base
resultado -= ((diferencia * 3) * resultado) / 100;
// Si es Americano se le incrementa el 15 % si es asiatico el 5% si es europeo el 30% del valor actual
resultado = calcularMarca(marca) * resultado;
// El plan del auto, el basico incrementa el 20% y la cobertura completa  el 50%
let incrementoPlan = obtenerPlan( plan );

resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

// Ya tenemos el costo

// Creando el objeto de "datos" para usarlo en state actualizado, sacamos del destructuring para crear este nuevo objeto

const datosAuto = {
  marca: marca,
  plan: plan,
  año: año
}


// Poblando y actualizando el state
this.setState({
  resultado: resultado,
  datos: datosAuto 
})


}


  render() {
    return (
        <div className = "contenedor">
          <Header
          titulo = "Cotizador de autos"
          />

        <div className = "contenedor-formulario">
        <Formulario
          cotizarSeguros =  {this.cotizarSeguros}
        />
        <Resumen 
          datos = {this.state.datos}
          
        
        />
        <Resultado
          resultado = {this.state.resultado}
        />
          
        
        </div>
        </div>
    );
  }
}

export default App;
