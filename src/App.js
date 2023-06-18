//import './App.css';

import {useEffect, useState} from "react";

import {Panell} from "./styled"


function App() {

const [web, setWeb] = useState(false);
const [seo, setSeo] = useState(false);
const [ads, setAds] = useState(false);

const handleWeb = () => {return (setWeb(!web), setPage(0))}; 
const handleSeo = () => {setSeo(!seo)};
const handleAds = () => {setAds(!ads)};

const [budget, setBudget] = useState(0);

const [page, setPage] = useState(0) 
const [idiom, setIdiom] = useState(0) 
const [fix, setFix] = useState(0) 

const suma = () =>  {return ((!web? 0:500) + (!seo? 0:300) + (!ads? 0:200)) };
const sumaWeb = () => {return ((!web? 0:page) * (!web? 0:idiom) * (fix))}


useEffect(() => {setBudget((suma()) + (sumaWeb())); console.log(budget)}) //GUARDEM PRESSUPOST A BUDGET

return (

<div>
        <p>
          ¿Què vols fer?
        </p>

<form>
  <label>
        <input type="checkbox"  checked={web}  onChange= {handleWeb} />
        Una pàgina Web (500€)

    {web &&   <Panell> 
      <p>Siusplau Omple les 2 caselles</p>
          <p>Número de pàgines <input type="text"  onChange={(event) => {
            return(setPage(event.target.value),setFix(30))}}/></p>

        <p>Número d´idiomes <input type="text"   onChange={(event) => {
        return(setIdiom(event.target.value),setFix(30))}}/></p>

    </Panell> }  

 </label>
   
</form>

<form>
   <label>
        <input type="checkbox"  checked={seo} onChange={handleSeo}/>
        Una consultoria SEO (300€)
  </label>
</form>

<form>
   <label>
        <input type="checkbox"  checked={ads} onChange={handleAds}/>
        Una campanya de Google Ads (200€)
  </label>
</form>

<p>
Preu: {suma() + sumaWeb()} 
</p>
        
  </div>
  );
}

export default App;
