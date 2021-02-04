import React, {useContext} from 'react'
import './index.css'
import TarifasContext from '../../context/tarifas'
import getTarifas from '../../services/getTarifas';
import {Link} from 'wouter';

export default function Detail({params}) {
    
    let tarifas = useContext(TarifasContext);
    if(tarifas.length === 0) tarifas = getTarifas();
    let tarifaSeleccionada = tarifas.find( t => t.id === parseInt(params.id) );
   
    return (
        <div className="detail">
            <h1>Información de la Tarifa</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Compañía</th>
                        <td>{tarifaSeleccionada.company}</td>
                    </tr>
                    <tr>
                        <th>Plan</th>
                        <td>{tarifaSeleccionada.name}</td>
                    </tr>
                    <tr>
                        <th>Conste anual</th>
                        <td>{tarifaSeleccionada.monthlyrate} €</td>
                    </tr>
                    <tr>
                        <th>Duracion contrato</th>
                        <td>{tarifaSeleccionada.contractlength} meses</td>
                    </tr>

                    <tr>
                        <th>Límite Gb</th>
                        <td>{tarifaSeleccionada.monthlygbs} Gb</td>
                    </tr>

                    <tr>
                        <th>Coste anual</th>
                        <td>{tarifaSeleccionada.monthlyrate * 12 + (tarifaSeleccionada.gbrate)*( tarifaSeleccionada.monthlygbs - tarifaSeleccionada.monthlygbs) } €</td>
                    </tr>

                </tbody>
            </table>

            <Link to={`/result/${localStorage.getItem("lastSearch")}`}><button>Volver</button></Link>
        </div>
    )
}

// Detail.propTypes = {

// }
