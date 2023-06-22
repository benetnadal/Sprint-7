
import {BotoMesMenys, InputQuantitat} from "../styled"

const PanellSeleccio = ({ descripcio, value, funcioSuma, funcioResta, funcioInput })  =>{

    return (

    <div> 
     <p>{descripcio}
     <BotoMesMenys onClick={funcioSuma}>+</BotoMesMenys>
     <InputQuantitat type="text" value={value} onChange={funcioInput}/>
     <BotoMesMenys onClick={funcioResta}>-</BotoMesMenys></p>
     </div>
    )}

    export default PanellSeleccio;





















