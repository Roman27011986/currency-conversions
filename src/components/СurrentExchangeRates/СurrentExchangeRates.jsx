import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { getAll } from '../../services/apiConverts';
import { currencies } from '../../currencies/currencies';
import styles from './СurrentExchangeRates.module.css';
import Chart from '../../video/Chart.mp4'

export default function СurrentExchangeRates() {
    const [allCurrency, setAllCurrency] = useState({})
    const [updated, setUpdated] = useState('')
    const [baseCurrency, setBaseCurrency] = useState('USD')
    
    useEffect(() => {
           getAllCurrency()  
    }, [baseCurrency])

    const getAllCurrency = async() => {
        const { data } = await getAll(baseCurrency)
        //"2021-09-18 09:08:02" получил "18-09-2021"
        const parsedData = data.updated.split(' ')[0].split('-').reverse().join('-')
        setAllCurrency(data.results)
        setUpdated(parsedData)
    }

    const handleChange = (event) => {
        setBaseCurrency(event.target.value);
    };

    return (
        <>
        <div className={styles.intro}>
        <div className={styles.video}>
          <video src={Chart} autoPlay loop  muted preload='auto'></video>
        </div>
            <div className={styles.baseCurrencySelect}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label={baseCurrency}
                    value={baseCurrency}
                    onChange={handleChange}
                
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <table>
                <thead style={{ opacity : updated ? '1' : '0'}}>
                    <tr>
                        <th>currency</th>
                        <th>today</th>
                        <th>buy</th>
                    </tr>
                </thead>
                <tbody style={{ opacity : updated ? '1' : '0'}}>
                    {Object.entries(allCurrency).map(([item, value]) => (
                        <tr key={item} className={styles.tableItem} >
                            <td>{item}</td>
                            <td>{`${updated}`}</td>
                            <td>{value.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};
