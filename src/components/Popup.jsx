import React from "react";

import { InnerPopupContainer, BotoEnorme} from "../styled"


 

const Popup = (props) =>{

    return  (props.trigger)?

     <BotoEnorme onClick={props.tancarPopup}> 
        <InnerPopupContainer >
     <p>{props.descripcio}</p>    
         </InnerPopupContainer>
     </BotoEnorme>:"";

     }

     export default Popup