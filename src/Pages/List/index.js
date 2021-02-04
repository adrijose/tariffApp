import React, {useContext} from 'react'
import './index.css'
import TarifasContext from '../../context/tarifas'
import TarifasTable from '../../components/TarifasTable/TarifasTable';


export default function List({params}) {

    let tarifas = useContext(TarifasContext);
    tarifas = tarifas.filter( t => t.monthlygbs >= params.GB);    
    tarifas =  tarifas.sort( (t1,t2) => t1.monthlygbs - t2.monthlygbs )

    localStorage.setItem("lastSearch", params.GB);
    

    return (
        <div className="List">
            <h1>Lista de tarifas</h1>
            <TarifasTable
                data = {tarifas}
                filter = {{
                    gb: params.GB
                }}
            />
        </div>
    )
}

