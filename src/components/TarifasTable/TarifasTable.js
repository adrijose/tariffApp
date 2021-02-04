import React from 'react'
import './index.css'
import { Link } from 'wouter';


export default function TarifasTable({data,filter}) {

    const tarifas = data;

    const createTupla = (tarifa) => {
        return(
            <tr key={tarifa.id}>
                <td>{tarifa.company}</td>
                <td>{tarifa.name}</td>
                <td>{tarifa.monthlyrate * 12 + (tarifa.gbrate)*(filter.gb - tarifa.monthlygbs) } €</td>
                <td>{tarifa.contractlength} meses</td>
                <td>{tarifa.monthlygbs} Gb</td>
                <td> 
                    <Link to={`/detail/${tarifa.id}`} state={ {data: tarifa} } >
                        <button className="btn">Más Info</button>
                    </Link>
                </td>
            </tr>
        );
    }

    return (            
        <table>
            <thead>
                <tr>
                    <th>Compañía</th>
                    <th>Plan</th>
                    <th>Conste anual</th>
                    <th>Duracion contrato</th>
                    <th>Límite Gb</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { tarifas.map( t => createTupla(t) ) }
            </tbody>
        </table>
        
    )
}

