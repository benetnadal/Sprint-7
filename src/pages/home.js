import { Container,  BotoEndavant } from "../styled";


import { useNavigate } from "react-router-dom";

const Home = () => {

const Navigate= useNavigate();

return(

<div>
    

       <Container>

        <h1>Sprint 7 - React II</h1>

        <p>En la següent App posem en pràctica conceptes relacionats amb l´utilització de Hooks, implementació de caselles de selecció, inputs, botons, localStorage i routing. Calcularem el pressupost d'una pàgina web, afegint  interaccions amb l'usuari. La nostra web haurà de reaccionar i modificar el preu total en funció de les opcions que triï l'usuari/ària.      
            
            
            
            </p>    

    <BotoEndavant onClick={() => Navigate(process.env.PUBLIC_URL + "/page2")}>SOM-HI!</BotoEndavant>


        </Container>    



    
    </div>)
    }

export default Home;