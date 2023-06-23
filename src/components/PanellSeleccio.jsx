
import {BotoMesMenys, InputQuantitat, BotoInf} from "../styled";
import {FaInfo} from "react-icons/fa";

const PanellSeleccio = ({ descripcio, value, funcioSuma, funcioResta, funcioInput, funcioPopup })  =>{

    return (

    <div> 
     <p>{descripcio}
     <BotoMesMenys onClick={funcioSuma}>+</BotoMesMenys>
     <InputQuantitat type="text" value={value} onChange={funcioInput}/>
   
     <BotoMesMenys onClick={funcioResta}>-</BotoMesMenys>
     <BotoInf onClick={funcioPopup}><FaInfo/></BotoInf></p>
     </div>
    )}

    export default PanellSeleccio;





















