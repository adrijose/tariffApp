import React, {useState} from 'react'
import './index.css'
import {useLocation} from 'wouter'

export default function Search() {

    const [gb, setGb] = useState(undefined);
    const [path,pushLocation] = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        pushLocation(`./result/${gb}`);
    }

    const handleChange = (event) => {
        setGb(event.target.value);
    }

    return (
        <div className="Search">
            <div>
                <h1>Buscador de Tarifas Movil</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="gb"
                        placeholder="Nº de Gb"
                        title="Introduce numero de gb"
                        required
                        onChange={handleChange}
                    ></input>
                    
                    <button>Buscar</button>
                </form>
            </div>
        </div>
    )
}