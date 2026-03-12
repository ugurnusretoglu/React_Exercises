import React, { useState } from 'react'
import '../CSS/currency.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "YOUR_API_KEY";

function Currency() {

    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState();

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }

    return (
        <div className='currency-div'>

            <div className='title'>
                <h3>Currency Exchange Application</h3>
            </div>

            <div style={{ marginTop: '25px' }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className='amount' />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaArrowRightArrowLeft style={{ fontSize: '20px', marginRight: '10px' }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />
            </div>

            <div>
                <button
                    onClick={exchange}
                    className='exchange-button'>Convert</button>
            </div>

        </div>
    )
}

export default Currency