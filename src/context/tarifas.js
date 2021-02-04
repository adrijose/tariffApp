import React, { useState, useEffect } from 'react';
import getTarifas from '../services/getTarifas';


const Context = React.createContext({})

export function TarifasContext ({children}){
    
    const [tarifas, setTarifas] = useState([]);

    useEffect(() => {
        setTarifas( getTarifas() )
    }, [])

    return <Context.Provider value={tarifas}>
        {children}
    </Context.Provider>
}

export default Context