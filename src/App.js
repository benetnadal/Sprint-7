
import {useEffect, useState} from "react";

import {Panell, DivPrincipal} from "./styled"
import PanellSeleccio from "./components/PanellSeleccio";


function App() {

const [web, setWeb] = useState(false);
const [seo, setSeo] = useState(false);
const [ads, setAds] = useState(false);

const handleWeb = () => {return (setWeb(!web), setCount1(1),setCount2(1))}; 
const handleSeo = () => {setSeo(!seo)};
const handleAds = () => {setAds(!ads)};

const[count1, setCount1]=useState(1)
const[count2, setCount2]=useState(1)

const add1 = () =>  {
  setCount1(count1 + 1)}  
  
const add2 = () =>  {
   setCount2(count2 + 1)}

const rest1 = () => {
    count1 >=2 ?setCount1(count1 - 1):alert("El valor mínim és 1")}

const rest2 = () => {
      count2 >=2 ?setCount2(count2 - 1):alert("El valor mínim és 1")}

const suma = () =>  {return ((!web? 0:500) + (!seo? 0:300) + (!ads? 0:200)) };
const sumaWeb = () => {return ((!web? 0:count1) * (!web? 0:count2) * (30))}

const [budget, setBudget] = useState(0);
useEffect(() => {setBudget((suma()) + (sumaWeb())); console.log(budget)}) //GUARDEM PRESSUPOST A BUDGET

return (

<DivPrincipal>
        <p>¿Què vols fer?</p> 
 
        <input type="checkbox"  checked={web}  onChange= {handleWeb} />
        Una pàgina Web (500€)         

      {web &&   <Panell>         

    <PanellSeleccio descripcio="Número de pàgines" funcioSuma={add1} value={count1} funcioResta={rest1} funcioInput= {(e)=> {setCount1(parseInt(e.target.value))}}/> 

     <PanellSeleccio descripcio="Número de llengües" funcioSuma={add2} value={count2} funcioResta={rest2} funcioInput= {(e)=> {setCount2(parseInt(e.target.value))}}/>

    </Panell> 

    }   

 <form>   
        <input type="checkbox"  checked={seo} onChange={handleSeo}/>
        Una consultoria SEO (300€)  
</form>

<form>  
        <input type="checkbox"  checked={ads} onChange={handleAds}/>
        Una campanya de Google Ads (200€) 
</form>

<p>
Preu: {suma() + sumaWeb()} 
</p>
         
  </DivPrincipal>
  );
}

export default App;















