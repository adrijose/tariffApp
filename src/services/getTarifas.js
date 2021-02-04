import {products} from '../Data/tarifasData.json';

export default function getTarifas(gb=0){
    return products.filter( p => p.monthlygbs >= gb);
}