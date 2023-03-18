import { useState } from 'react';
import './App.css';
const URL = 'https://api.exchangerate.host/latest'

function App() {

  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);

  async function convert(e) {
    e.preventDefault();
    try {
        const address = URL;
        const response = await fetch(address);
    
        if (response.ok) {
            const json = await response.json();
            setRate(json.rates.GBP);
            setGbp(eur * json.rates.GBP);
        } else {
            alert('virhe valuuttakursin haussa');
        }
    } catch (err) {
    alert(err);
}
}

  return (
    <div id='container'>
      <form onSubmit={convert}>
        <div>
          <label>Eur: </label>&nbsp;
          <input type="number" step='0.01' value={eur} onChange={e => setEur(e.target.value)}></input>
          <output> exchange rate 1€ = {rate} Gbp</output>
        </div>
        <div>
          <label>Gbp: </label>
          <output>{gbp.toFixed(2)} £</output>
        </div>
        <div>
          <button>Laske</button>
        </div>

      </form>

    </div>
  );
}

export default App;
