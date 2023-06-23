
import {useEffect, useState} from "react";

import {Panell, DivPrincipal, BotoEnrere } from "../styled"
import PanellSeleccio from "../components/PanellSeleccio";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";



const Page2 = () => {

const Navigate= useNavigate();


<div>Page2</div>;

const storedWeb = JSON.parse(localStorage.getItem("web")); 
const storedSeo = JSON.parse(localStorage.getItem("seo"));
const storedAds = JSON.parse(localStorage.getItem("ads"));
const storedCount1 = JSON.parse(localStorage.getItem("count1"));
const storedCount2 = JSON.parse(localStorage.getItem("count2"));

const [web, setWeb] = useState(storedWeb); 
const [seo, setSeo] = useState(storedSeo); 
const [ads, setAds] = useState(storedAds); 

const handleWeb = () => {return (setWeb(!web), setCount1(1),setCount2(1))};  
const handleSeo = () => {setSeo(!seo)};
const handleAds = () => {setAds(!ads)};

const[count1, setCount1]=useState(storedCount1)  
const[count2, setCount2]=useState(storedCount2)  

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

// const [budget, setBudget] = useState(0);
// useEffect(() => {setBudget((suma()) + (sumaWeb())); console.log(budget)}) 

useEffect(() => {

localStorage.setItem("web", JSON.stringify(web))
localStorage.setItem("seo", JSON.stringify(seo))
localStorage.setItem("ads", JSON.stringify(ads))
localStorage.setItem("count1", JSON.stringify(count1))
localStorage.setItem("count2", JSON.stringify(count2))

},[web,seo, ads, count1, count2]) 

const [popupEstat1, setPopupEstat1] = useState(false);
const [popupEstat2, setPopupEstat2] = useState(false);

 
return (

<DivPrincipal>
        <p>¿Què vols fer?</p> 
 
        <input type="checkbox"  checked={web}  onChange= {handleWeb} />
        Una pàgina Web (500€)         

      {web &&   <Panell>         


    <PanellSeleccio descripcio="Número de pàgines" funcioSuma={add1} value={count1} funcioResta={rest1} funcioInput= {(e)=> {setCount1(parseInt(e.target.value))}} 
    funcioPopup={() =>  {setPopupEstat1(true)}}/>
        
    <Popup trigger={popupEstat1} descripcio="En aquest component has d´indicar quantes pàgines web vols encarregar " tancarPopup={()=> {setPopupEstat1(false)}} />

     <PanellSeleccio descripcio="Número de llengües" funcioSuma={add2} value={count2} funcioResta={rest2} funcioInput= {(e)=> {setCount2(parseInt(e.target.value))}} funcioPopup={() =>  {setPopupEstat2(true)}}/>

     <Popup trigger={popupEstat2} descripcio="En aquest component has d´indicar el número de llengües que vols que hi apareguin" tancarPopup={()=> {setPopupEstat2(false)}}/>

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


    <BotoEnrere onClick={() => Navigate(process.env.PUBLIC_URL + "/")}>Pantalla Inicial</BotoEnrere>



  </DivPrincipal>

  
  )};

export default Page2;