import './App.css';

import {useEffect, useState} from "react";


function App() {

const [web, setWeb] = useState(false);
const [seo, setSeo] = useState(false);
const [ads, setAds] = useState(false);

const handleWeb = () => {setWeb(!web)}; // CANVI D´ESTAT A TRUE QUAN FEM CHECKBOX
const handleSeo = () => {setSeo(!seo)};
const handleAds = () => {setAds(!ads)};

const [budget, setBudget] = useState(0);

const suma = () =>  {return ((!web? 0:500) + (!seo? 0:300) + (!ads? 0:200))};

useEffect(() => {setBudget(suma()); console.log(budget)}) //GUARDEM PRESSUPOST A BUDGET

return (

<div>
        <p>
          ¿Què vols fer?
        </p>

<form>
  <label>
        <input type="checkbox" checked={web} onChange= {handleWeb} />
        Una pàgina Web (500€)

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
Preu: {suma()} 
</p>
        
  </div>
  );
}

export default App;
