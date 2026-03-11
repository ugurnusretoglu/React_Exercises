import React from 'react'
import '../CSS/currency.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";


function Currency() {
    return (
        <div className='currency-div'>

            <div className='title'>
                <h3>Currency Exchange Application</h3>
            </div>

            <div style={{ marginTop: '25px' }}>
                <input type="number" className='amount' />
                <select className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TL</option>
                </select>

                <FaArrowRightArrowLeft style={{ fontSize: '20px', marginRight: '10px' }} />

                <select className='to-currency-option'>
                    <option>TL</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>

                <input type="number" className='result' />
            </div>

            <div>
                <button className='exchange-button'>Convert</button>
            </div>

        </div>
    )
}

export default Currency