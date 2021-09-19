import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { getConverted } from '../../services/apiConverts'
import { currencies } from '../../currencies/currencies'
import styles from './ConverterForm.module.css'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export default function ConverterForm() {
    const [fromCurrency, setFromCurrency] = useState('EUR');
    const [toCurrency, setToCurrency] = useState('USD');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState({});

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'from':
                setFromCurrency(event.target.value);
                break;
              case 'to':
                setToCurrency(event.target.value);
                break;
             case 'amount':
                setAmount(event.target.value);
                break;
            default:
                break;
        }
    };
    
     const handleSubmit = async(event) => {
         event.preventDefault()
         const params = {
             fromCurrency,
             toCurrency,
             amount
         };
         const { data } = await getConverted(params)
         setCurrency(data.result)
     };

    return (
      <>
        <Box
          className={styles.formBox}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
      >
        <div >
            <TextField sx={{ width: '28ch', marginRight: '10px' }}
              onChange={handleChange}
              value={amount}
              name='amount'
              id="outlined-basic"
              label="amount"
              variant="outlined"
              type='number'
              required
            />
            <TextField
              id="outlined-select-currency"
              name='from'
              select
              label={fromCurrency}
              value={fromCurrency}
              onChange={handleChange}
              sx={{marginRight:'10px'}}
            >
              
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
              
            </TextField>
            
              <TextField
                id="outlined-select-currency"
                name='to'
                select
                label={toCurrency}
                value={toCurrency}
                onChange={handleChange}
            >
              
                {currencies.map((option) => (
                   <MenuItem key={option.value} value={option.value}>
                      {option.label}
                   </MenuItem>
                ))}
              
              </TextField>
        </div>
              <ColorButton
                sx={{ marginTop: '10px', fontFamily: 'Azeret Mono' }}
                type='submit' variant="contained"
                disabled={amount ? false : true} >
                Convert
              </ColorButton>

            </Box>
          {currency[toCurrency] && <p className={styles.text}>{toCurrency ? currency[toCurrency] : ''}</p>}
      </>
  );
};